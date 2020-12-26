import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common';

@Controller('movies') // 이 부분이 우리 url의 Entry Point를 컨트롤 한다.
export class MoviesController {
  @Get()
  getAll() {
    return 'This will return all movies';
  }

  // :id들이 search도 id로 취급하기 때문에 :id보다 위에 작성해준다.
  @Get('search')
  search(@Query('year') searchingYear: string) {
    return `We are searching for a movie made after: ${searchingYear}`;
  }

  @Get(':id')
  getOne(@Param('id') movieId: string) {
    return `This will return one movie with the id: ${movieId}`;
  }

  @Post()
  create(@Body() movieData) {
    // express에서는 body를 json으로 리턴하려면 몇가지 작업이 필요했지만 여기선 필요없다.
    return movieData;
  }

  @Delete(':id')
  remove(@Param('id') movieId: string) {
    return `This will delete a movie with the id: ${movieId}`;
  }

  // put method는 모든 리소스를 업데이트하기 때문에 필요없다고 하는 사람들이 있다.
  // patch method는 리소스의 일부부만 업데이트 해준다.
  @Patch(':id')
  patch(@Param('id') movieId, @Body() updateData) {
    return {
      updateMovie: movieId,
      ...updateData,
    };
  }
}
