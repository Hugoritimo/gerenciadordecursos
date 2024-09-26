import { Module } from '@nestjs/common'; // Importa o decorator `Module` para criar módulos no NestJS
import { TypeOrmModule } from '@nestjs/typeorm'; // Importa o módulo do TypeORM para gerenciar o banco de dados
import { CursosService } from './cursos.service'; // Serviço que lida com a lógica de cursos
import { CursosController } from './cursos.controller'; // Controlador que lida com as rotas de cursos
import { Curso } from './curso.entity/curso.entity'; // Entidade `Curso`, que representa a tabela no banco

@Module({
  // `imports`: Aqui você importa outros módulos que esse módulo precisa para funcionar.
  // `TypeOrmModule.forFeature([Curso])`: Isso torna o modelo `Curso` disponível no contexto do TypeORM, 
  // permitindo que ele seja usado para consultar e manipular dados no banco de dados.
  imports: [TypeOrmModule.forFeature([Curso])],

  // `providers`: Aqui você lista os serviços que esse módulo precisa. 
  // No caso, `CursosService` contém a lógica para manipular os cursos.
  providers: [CursosService],

  // `controllers`: Aqui você define os controladores que lidam com as requisições HTTP para este módulo.
  // O `CursosController` tem as rotas que recebem, atualizam, listam e removem cursos.
  controllers: [CursosController],
})
export class CursosModule { }
