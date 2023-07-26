import { ChildrenMovie } from './movie/children-movie'
import { Movie } from './movie/movie'
import { NewMovie } from './movie/new-movie'
import { RegularMovie } from './movie/regular-movie'
import { MoviesRepository } from './repository/movie-repository'

interface MovieRootDto {
  [movieId: string]: MovieDto
}

interface MovieDto {
  title: string
  code: string
}

export enum MovieType {
  REGULAR = 'regular',
  NEW = 'new',
  CHILDREN = 'children',
}

export class MoviesRepositoryImpl implements MoviesRepository {
  constructor(private moviesDto: MovieRootDto) {}

  movieForId(aMovieId: string): Movie {
    const movieDto = this.moviesDto[aMovieId]
    return this.create(movieDto)
  }

  private create(movieDto: MovieDto): Movie {
    switch (movieDto.code) {
      case MovieType.REGULAR:
        return new RegularMovie(movieDto.code, movieDto.title)
      case MovieType.NEW:
        return new NewMovie(movieDto.code, movieDto.title)
      case MovieType.CHILDREN:
        return new ChildrenMovie(movieDto.code, movieDto.title)
      default:
        throw new Error('Invalid movie code')
    }
  }
}
