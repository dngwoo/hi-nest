import { Module } from '@nestjs/common';
import { MoviesModule } from './movies/movies.module';
import { AppController } from './app/app.controller';

// 이 함수는 데코레이터라고 부른다.
// 데코레이터는 클래스에 함수기능을 추가할 수 있다.
@Module({
  imports: [MoviesModule], // main.ts에서 하나의 모듈로 합쳐짐
  // 컨트롤러가 하는 일은 기본적으로 url을 가져오고 함수를 실행하는 것이다.
  // express로 치면 라우터같은 존재임.(controller + router)
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
