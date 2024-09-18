/* eslint-disable prettier/prettier */
import { Controller, Post, Body, Get, Param, Put, Delete } from '@nestjs/common';
import { CursosService } from './cursos.service';
import { Curso } from './curso.entity';

@Controller('cursos')
export class CursosController {
    constructor(private readonly cursosService: CursosService) { }

    @Post()
    create(@Body() cursoData: Curso): Promise<Curso> {
        console.log('Recebendo dados do curso:', cursoData); // Log para verificar os dados recebidos
        return this.cursosService.create(cursoData);
    }

    @Get()
    findAll(): Promise<Curso[]> {
        return this.cursosService.findAll();
    }

    @Put(':id')
    update(@Param('id') id: string, @Body() cursoData: Curso): Promise<Curso> {
        return this.cursosService.update(id, cursoData);
    }

    @Delete(':id')
    remove(@Param('id') id: string): Promise<void> {
        return this.cursosService.remove(id);
    }
}
