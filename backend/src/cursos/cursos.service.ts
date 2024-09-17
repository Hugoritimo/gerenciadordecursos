import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Curso } from './curso.entity/curso.entity';

@Injectable()
export class CursosService {
    constructor(
        @InjectRepository(Curso)
        private cursosRepository: Repository<Curso>,
    ) { }

    findAll(): Promise<Curso[]> {
        return this.cursosRepository.find();
    }

    findOne(id: number): Promise<Curso> {
        return this.cursosRepository.findOne({ where: { id } });
    }

    create(curso: Curso): Promise<Curso> {
        return this.cursosRepository.save(curso);
    }

    async remove(id: number): Promise<void> {
        await this.cursosRepository.delete(id);
    }
}
