import { Rental } from '../rental'
import { Movie } from './movie'

export class NewMovie extends Movie {
  public calculateAmountByRental(aRental: Rental): number {
    return aRental.days * 3
  }

  public hasBonusForTwoDaysRelease(aRental: Rental): boolean {
    return aRental.days > 2 ? true : false
  }
}
