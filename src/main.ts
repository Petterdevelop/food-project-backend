import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();
  await app.listen(process.env.PORT);
  console.log('Escuchando el puerto ', process.env.PORT);
  console.log('**********************');
  console.log(process.env.ENVIROMENT);
}
bootstrap();
