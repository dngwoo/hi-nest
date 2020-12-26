import { Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';

@Controller('movies') // 이 부분이 우리 url의 Entry Point를 컨트롤 한다.
export class MoviesController {
  @Get()
  getAll() {
    return 'This will return all movies';
  }

  @Get('/:id')
  getOne(@Param('id') movieId: string) {
    return `This will return one movie with the id: ${movieId}`;
  }

  @Post()
  create() {
    return 'This will create a movie';
  }

  @Delete('/:id')
  remove(@Param('id') movieId: string) {
    return `This will delete a movie with the id: ${movieId}`;
  }

  // put method는 모든 리소스를 업데이트하기 때문에 필요없다고 하는 사람들이 있다.
  // patch method는 리소스의 일부부만 업데이트 해준다.
  @Patch('/:id')
  patch(@Param('id') movieId) {
    return `This will patch a movie with the id: ${movieId}`;
  }
}
