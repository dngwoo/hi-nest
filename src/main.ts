import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  // AppModule은 rootModule와 비슷하다. 어떤 서비스를 만들던 import해주어야 한다.
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
}
bootstrap();
