import { Customer } from './customer'
import { Movie } from './movie/movie'
import { MoviesRepositoryImpl } from './movies-repository'
import { Rental } from './rental'
import { Presenter } from './presenter/index'
import { MoviesRepository } from './repository/movie-repository'

interface CustomerDto {
  name: string
  rentals: { movieID: string; days: number }[]
}

type TransformedRental = Rental & { movie: Movie }

export interface StatementData {
  customerName: string
  rentals: TransformedRental[]
  amount: number
  frequentRenterPoints: number
}

export class Statement {
  private customer: Customer
  private moviesRepository: MoviesRepository
  private presenter: Presenter<StatementData>

  constructor(
    customer: CustomerDto,
    movies: MoviesRepository,
    presenter: Presenter<StatementData>,
  ) {
    this.customer = new Customer(customer)
    this.moviesRepository = movies
    this.presenter = presenter
  }

  public calculate() {
    const statementData = this.createStatementData()
    return this.presenter.print(statementData)
  }

  private createStatementData() {
    return {
      customerName: this.customer.name,
      rentals: this.customer.rentals.map((rental) => ({
        ...rental,
        movie: this.moviesRepository.movieForId(rental.movieID),
      })),
      amount: this.amount,
      frequentRenterPoints: this.frequentRenterPoints,
    }
  }

  private get frequentRenterPoints() {
    let frequentRenterPoints = 0
    for (const rental of this.customer.rentals) {
      frequentRenterPoints++
      if (this.movieForId(rental.movieID).hasBonusForTwoDaysRelease(rental))
        frequentRenterPoints++
    }
    return frequentRenterPoints
  }

  private movieForId(aMovieId: string) {
    return this.moviesRepository.movieForId(aMovieId)
  }

  private get amount() {
    return this.customer.rentals.reduce(
      (total, rental) =>
        total + this.movieForId(rental.movieID).calculateAmountByRental(rental),
      0,
    )
  }
}
