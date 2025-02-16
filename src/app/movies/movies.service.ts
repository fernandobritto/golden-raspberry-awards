import { Inject, Injectable } from '@nestjs/common'
import {
  IMoviesRepository,
  MOVIES_REPOSITORY
} from 'src/domain/infra/repositories/movies/movies.interface'

@Injectable()
export class MoviesService {
  constructor(
    @Inject(MOVIES_REPOSITORY)
    private readonly moviesRepository: IMoviesRepository
  ) {}

  async getMovies() {
    return this.moviesRepository.getMovies()
  }
}
