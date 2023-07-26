import { Presenter } from '.'
import { StatementData } from '../statement'

export class HTMLPresenter implements Presenter<StatementData> {
  print(statementData: StatementData): string {
    let result = `<h1>Rental Record for <em>${statementData.customerName}</em></h1>\n`
    result += '<table>\n'
    for (const rental of statementData.rentals) {
      result += `  <tr><td>${
        rental.movie.title
      }</td><td>${rental.movie.calculateAmountByRental(rental)}</td></tr>\n`
    }
    result += '</table>\n'
    result += `<p>Amount owed is <em>${statementData.amount}</em></p>\n`
    result += `<p>You earned <em>${statementData.frequentRenterPoints}</em> frequent renter points</p>\n`
    return result
  }
}
