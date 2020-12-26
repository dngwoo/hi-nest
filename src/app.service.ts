// 여기는 controller의 function을 정의하는 곳이며 비지니스 로직을 실행하는 역할을 한다.

import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
  getHi(): string {
    return 'Hi Nest';
  }
}
