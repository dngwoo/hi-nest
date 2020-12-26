import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  // AppModule은 rootModule와 비슷하다. 어떤 서비스를 만들던 import해주어야 한다.
  const app = await NestFactory.create(AppModule);
  // pipe라는 것은 express에서 middleware 같은 것이다.
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
      transform: true,
    }),
  );
  await app.listen(3000);
}
bootstrap();
