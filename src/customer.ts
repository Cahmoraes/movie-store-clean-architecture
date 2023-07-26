import { Rental } from './rental'

interface CustomerArgDto {
  name: string
  rentals: {
    movieID: string
    days: number
  }[]
}

export class Customer {
  private _name: string
  private _rentals: Rental[]

  constructor(data: CustomerArgDto) {
    this._name = data.name
    this._rentals = data.rentals.map(
      (rental) => new Rental(rental.movieID, rental.days),
    )
  }

  get name() {
    return this._name
  }

  get rentals() {
    return this._rentals
  }
}
