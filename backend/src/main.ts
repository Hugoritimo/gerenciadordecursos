import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();  // Habilita CORS para permitir requisições do frontend
  await app.listen(3001);  // Certifique-se de que o backend está rodando na porta correta
}
bootstrap();
