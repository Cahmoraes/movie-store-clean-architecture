import { Rental } from '../rental'

export abstract class Movie {
  protected rentalFee = 2

  constructor(readonly code: string, readonly title: string) {}

  abstract calculateAmountByRental(aRental: Rental): number

  public hasBonusForTwoDaysRelease(aRental: Rental): boolean {
    return false
  }
}
