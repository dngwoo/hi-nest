import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

// 이 함수는 데코레이터라고 부른다.
// 데코레이터는 클래스에 함수기능을 추가할 수 있다.
@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
