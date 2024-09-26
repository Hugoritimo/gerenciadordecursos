import { Controller, Get } from '@nestjs/common'; // Importa decorators para definir rotas e o controlador
import { AppService } from './app.service'; // Importa o serviço para usar no controlador

// Define a classe `AppController` como um controlador
// Isso significa que essa classe vai lidar com rotas e requisições HTTP
@Controller()
export class AppController {
  // Injeta o serviço `AppService` para que possamos usar suas funções dentro do controlador
  constructor(private readonly appService: AppService) { }

  // Define que essa função vai lidar com requisições `GET` para a rota `/` (raiz do servidor)
  @Get()
  getHello(): string {
    // Chama a função `getHello()` do `AppService` e retorna o resultado como string
    return this.appService.getHello();
  }
}
