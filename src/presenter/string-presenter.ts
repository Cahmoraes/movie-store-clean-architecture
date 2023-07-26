import { Presenter } from '.'
import { StatementData } from '../statement'

export class StringPresenter implements Presenter<StatementData> {
  print(statementData: StatementData): string {
    let result = `Rental Record for ${statementData.customerName}\n`
    for (let rental of statementData.rentals) {
      result += `\t${
        rental.movie.title
      }\t${rental.movie.calculateAmountByRental(rental)}\n`
    }
    result += `Amount owed is ${statementData.amount}\n`
    result += `You earned ${statementData.frequentRenterPoints} frequent renter points\n`
    return result
  }
}
