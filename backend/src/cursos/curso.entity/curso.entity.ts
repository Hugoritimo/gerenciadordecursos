/* eslint-disable prettier/prettier */
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Curso {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    titulo: string;

    @Column('decimal')
    preco: number;

    @Column()
    descricao: string;

    @Column()
    duracao: string;

    @Column('decimal', { nullable: true })
    precoComDesconto?: number;

    @Column('text')
    conteudo: string;
}
