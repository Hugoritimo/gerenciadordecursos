/* eslint-disable prettier/prettier */
import { Controller, Post, Body } from '@nestjs/common';
import { CursosService } from './cursos.service';
import { Curso } from './curso.entity';

@Controller('cursos')
export class CursosController {
    constructor(private readonly cursosService: CursosService) { }

    @Post()
    create(@Body() cursoData: Curso): Promise<Curso> {
        return this.cursosService.create(cursoData);
    }
}
