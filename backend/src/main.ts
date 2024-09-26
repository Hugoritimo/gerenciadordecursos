import { NestFactory } from '@nestjs/core'; // Importa o `NestFactory`, que é usado para criar uma instância da aplicação NestJS
import { AppModule } from './app.module'; // Importa o módulo raiz da aplicação (o "coração" do seu app NestJS)

// Função assíncrona que inicializa o servidor
async function bootstrap() {
  // Cria uma instância da aplicação NestJS usando o `AppModule`
  const app = await NestFactory.create(AppModule);

  // Habilita o CORS (Cross-Origin Resource Sharing)
  // Isso é importante se eu tiver um frontend separado, que precisa fazer requisições para o backend
  app.enableCors();

  // Faz o app "ouvir" na porta 3001
  // Isso significa que meu backend estará acessível em `http://localhost:3001`
  await app.listen(3001);
}

// Chama a função `bootstrap` para iniciar o servidor
bootstrap();
