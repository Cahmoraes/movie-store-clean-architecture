import { Rental } from '../rental'
import { Movie } from './movie'

export class RegularMovie extends Movie {
  public calculateAmountByRental(aRental: Rental) {
    let amount = this.rentalFee
    if (aRental.days > 2) {
      amount += (aRental.days - 2) * 1.5
    }
    return amount
  }
}
