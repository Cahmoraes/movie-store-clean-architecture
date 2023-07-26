import { test, expect, beforeEach } from 'vitest'
import { Statement } from '../src/statement'
import customerDto from '../repository/customers.json'
import moviesDto from '../repository/movies.json'
import { StringPresenter } from '../src/presenter/string-presenter'
import { MoviesRepositoryImpl } from '../src/movies-repository'
import { HTMLPresenter } from '../src/presenter/html-presenter'

let moviesRepository: MoviesRepositoryImpl

beforeEach(() => {
  moviesRepository = new MoviesRepositoryImpl(moviesDto)
})

test('Deve exibir relatório textual', () => {
  const result = new Statement(
    customerDto,
    moviesRepository,
    new StringPresenter(),
  ).calculate()

  expect(result).toMatchSnapshot()
  console.log(result)
})

test('Deve exibir relatório HTML', () => {
  const result = new Statement(
    customerDto,
    moviesRepository,
    new HTMLPresenter(),
  ).calculate()

  expect(result).toMatchSnapshot()
  console.log(result)
})
