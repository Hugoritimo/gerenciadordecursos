/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Curso } from './curso.entity';

@Injectable()
export class CursosService {
    constructor(
        @InjectRepository(Curso)
        private cursoRepository: Repository<Curso>,
    ) { }

    async create(cursoData: Curso): Promise<Curso> {
        return this.cursoRepository.save(cursoData); // Salva o curso no banco de dados
    }
}
export { Curso };

