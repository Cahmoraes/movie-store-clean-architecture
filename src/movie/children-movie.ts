import { Rental } from '../rental'
import { Movie } from './movie'

export class ChildrenMovie extends Movie {
  protected rentalFee = 1.5

  calculateAmountByRental(aRental: Rental) {
    let amount = this.rentalFee
    if (aRental.days > 3) {
      amount += (aRental.days - 3) * 1.5
    }
    return amount
  }
}
