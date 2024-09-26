/* eslint-disable prettier/prettier */
// Importa `Injectable` para tornar esta classe um serviço, `InjectRepository` para injetar o repositório do TypeORM
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Curso } from './curso.entity';

// `@Injectable()` indica que esta classe é um serviço que pode ser injetado em outros lugares
@Injectable()
export class CursosService {
    // O construtor injeta o repositório de cursos.
    // O repositório é como se fosse uma "porta" para interagir com a tabela de cursos no banco de dados.
    constructor(
        @InjectRepository(Curso)
        private cursoRepository: Repository<Curso>, // Isso cria um repositório para trabalhar com os cursos
    ) { }

    // Método para criar e salvar um novo curso no banco de dados
    async create(cursoData: Curso): Promise<Curso> {
        console.log('Salvando curso no banco de dados:', cursoData); // Apenas um log para ver o que está sendo salvo
        return this.cursoRepository.save(cursoData); // Salva os dados do curso no banco e retorna o curso salvo
    }

    // Método para pegar todos os cursos salvos no banco de dados
    async findAll(): Promise<Curso[]> {
        return this.cursoRepository.find(); // Busca e retorna todos os cursos como uma lista
    }

    // Método para atualizar um curso pelo seu `id`
    async update(id: string, cursoData: Curso): Promise<Curso> {
        // Primeiro, ele atualiza o curso no banco de dados com as novas informações
        await this.cursoRepository.update(id, cursoData);
        // Em seguida, ele busca o curso atualizado e retorna para confirmar as mudanças
        return this.cursoRepository.findOne({ where: { id: parseInt(id) } }); // Busca o curso pelo `id`
    }

    // Método para remover um curso pelo `id`
    async remove(id: string): Promise<void> {
        // Deleta o curso com o `id` fornecido
        await this.cursoRepository.delete(id);
    }
}
