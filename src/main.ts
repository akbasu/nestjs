import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config';
import { Logger } from '@nestjs/common';

async function bootstrap() {

  //https://dev.to/one-beyond/how-to-configure-and-use-environment-variables-in-nestjs-3cm2 
  
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe());
  const configService = app.get(ConfigService);
  const port = configService.get<number>('port');  
  //Logger.log(` ~ Port : ${port}`);
  await app.listen(port);
  Logger.log(`~ Application is running on: ${await app.getUrl()}`);
}

bootstrap();
