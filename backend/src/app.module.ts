/* eslint-disable prettier/prettier */
// Importa decoradores e módulos do NestJS
import { Module, OnModuleInit } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm'; // Importa o TypeORM para conectar ao banco de dados
import { CursosModule } from './cursos/cursos.module'; // Importa o módulo dos cursos

// Declaração do módulo principal da aplicação (AppModule)
@Module({
  // `imports` define os outros módulos que serão usados no projeto
  imports: [
    // Configurações para conectar o TypeORM ao banco de dados PostgreSQL
    TypeOrmModule.forRoot({
      type: 'postgres', // Define que o banco de dados é do tipo PostgreSQL
      host: 'localhost', // Endereço do servidor do banco (localhost é a máquina local)
      port: 5432, // Porta de acesso ao banco de dados (5432 é padrão para PostgreSQL)
      username: 'postgres', // Nome de usuário para acessar o banco de dados
      password: 'password', // Senha para acessar o banco de dados 
      database: 'postgres', // Nome do banco de dados que você quer acessar
      autoLoadEntities: true, // Carrega automaticamente as entidades para o TypeORM
      synchronize: true, // Sincroniza automaticamente as entidades com o banco (ótimo para dev, perigoso em prod, botei para ser mais rapido)
    }),
    // Importa o módulo `CursosModule` para que suas rotas e lógica fiquem disponíveis
    CursosModule,
  ],
})
// Define a classe `AppModule` como módulo principal da aplicação
export class AppModule implements OnModuleInit {
  // Função que é executada assim que o módulo é inicializado
  onModuleInit() {
    console.log('vou beber uma coca se rodar de primeira.'); // Mensagem que será mostrada no console quando tudo estiver funcionando
  }
}
