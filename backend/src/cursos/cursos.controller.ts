/* eslint-disable prettier/prettier */
// Importa alguns itens que ajudam a criar endpoints HTTP e o serviço para manipular cursos
import { Controller, Post, Body, Get, Param, Put, Delete } from '@nestjs/common';
import { CursosService } from './cursos.service';
import { Curso } from './curso.entity';

// Marca essa classe como um controlador que lida com rotas relacionadas a "cursos"
// Isso significa que qualquer rota que comece com "/cursos" vai cair aqui
@Controller('cursos')
export class CursosController {
    // O controlador está "puxando" o `CursosService` para usar as funções dele
    constructor(private readonly cursosService: CursosService) { }

    // Quando alguém fizer uma requisição `POST` para "/cursos", ele vai criar um novo curso
    @Post()
    create(@Body() cursoData: Curso): Promise<Curso> {
        console.log('Recebendo dados do curso:', cursoData); // Só mostrando no console os dados do curso
        return this.cursosService.create(cursoData); // Chama o serviço para salvar o novo curso no banco
    }

    // Quando alguém fizer uma requisição `GET` para "/cursos", ele vai retornar a lista de cursos
    @Get()
    findAll(): Promise<Curso[]> {
        return this.cursosService.findAll(); // Pega todos os cursos do banco de dados e retorna
    }

    // Quando alguém fizer um `PUT` para "/cursos/:id", ele vai atualizar o curso com aquele `id`
    // O `:id` é um "parâmetro" dinâmico que significa que você pode passar um número, tipo "/cursos/1"
    @Put(':id')
    update(@Param('id') id: string, @Body() cursoData: Curso): Promise<Curso> {
        return this.cursosService.update(id, cursoData); // Atualiza o curso com as novas informações
    }

    // Quando alguém fizer um `DELETE` para "/cursos/:id", ele vai apagar o curso com aquele `id`
    @Delete(':id')
    remove(@Param('id') id: string): Promise<void> {
        return this.cursosService.remove(id); // Remove o curso do banco de dados
    }
}
