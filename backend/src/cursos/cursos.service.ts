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
        console.log('Salvando curso no banco de dados:', cursoData); // Log para verificar
        return this.cursoRepository.save(cursoData);
    }

    async findAll(): Promise<Curso[]> {
        return this.cursoRepository.find();
    }

    async update(id: string, cursoData: Curso): Promise<Curso> {
        await this.cursoRepository.update(id, cursoData);
        return this.cursoRepository.findOne({ where: { id: parseInt(id) } }); // Atualização aqui
    }

    async remove(id: string): Promise<void> {
        await this.cursoRepository.delete(id);
    }
}
