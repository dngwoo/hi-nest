import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  // @Get이라는 것은 express의 get라우터와 같은 역할을 한다.(app.get)
  // 데코레이터는 꾸며주는 함수나 클래스랑 붙어 있어야 한다.
  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  // 예제
  @Get('/hello')
  sayHello(): string {
    return 'Hello everyone';
  }
}
