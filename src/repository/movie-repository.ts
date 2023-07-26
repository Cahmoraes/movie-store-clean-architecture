import { Movie } from '../movie/movie'

export interface MoviesRepository {
  movieForId(movieId: string): Movie
}
