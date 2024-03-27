import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import swagger from '@common/swagger/swagger';
import { AllExceptionFilter } from '@common/exceptions';
import { RequestInterceptor } from '@common/interceptors/request.interceptor';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  swagger(app);
  app.useGlobalFilters(new AllExceptionFilter());
  app.useGlobalInterceptors(new RequestInterceptor());
  app.useGlobalPipes(new ValidationPipe());
  app.enableCors();
  await app.listen(3000);
}
bootstrap();
