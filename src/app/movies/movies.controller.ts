import { Controller, HttpCode, HttpStatus, Get } from '@nestjs/common'
import { MoviesService } from './movies.service'
import { ApiTags } from '@nestjs/swagger'

@Controller('movies')
@ApiTags('movies')
export class MoviesController {
  constructor(private readonly moviesService: MoviesService) {}

  @Get()
  @HttpCode(HttpStatus.OK)
  async getMovies() {
    return this.moviesService.getMovies()
  }
}
