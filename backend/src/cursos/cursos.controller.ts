import { Controller, Get, Post, Body, Param, Delete } from '@nestjs/common';
import { CursosService } from './cursos.service';
import { Curso } from './curso.entity/curso.entity';

@Controller('cursos')
export class CursosController {
    constructor(private readonly cursosService: CursosService) { }

    @Get()
    findAll(): Promise<Curso[]> {
        return this.cursosService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id: string): Promise<Curso> {
        return this.cursosService.findOne(+id);
    }

    @Post()
    create(@Body() curso: Curso): Promise<Curso> {
        return this.cursosService.create(curso);
    }

    @Delete(':id')
    remove(@Param('id') id: string): Promise<void> {
        return this.cursosService.remove(+id);
    }
}
