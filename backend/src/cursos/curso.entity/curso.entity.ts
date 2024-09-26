/* eslint-disable prettier/prettier */
// Importa algumas funcionalidades da biblioteca TypeORM
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

// Marca a classe `Curso` como uma "entidade". 
// Isso significa que essa classe será convertida para uma tabela no banco de dados.
@Entity()
export class Curso {

    // Define que `id` é a chave primária da tabela e será gerado automaticamente
    @PrimaryGeneratedColumn()
    id: number; // Este campo vai armazenar o identificador único do curso.

    // Define a coluna `titulo` como uma string.
    // Aqui vai ficar o título do curso.
    @Column()
    titulo: string;

    // Define a coluna `preco` como um decimal (número com casas decimais).
    // Aqui vai ficar o preço do curso.
    @Column('decimal')
    preco: number;

    // Define a coluna `descricao` como uma string.
    // Essa coluna armazena a descrição ou resumo do que é o curso.
    @Column()
    descricao: string;

    // Define a coluna `duracao` como uma string.
    // Armazena a duração do curso (ex.: "3 horas", "2 dias", "6 semanas").
    @Column()
    duracao: string;

    // Define a coluna `precoComDesconto` como um decimal.
    // Esse campo é opcional (por causa do `nullable: true`), então ele pode ficar vazio.
    // Armazena o preço do curso com desconto, se houver.
    @Column('decimal', { nullable: true })
    precoComDesconto?: number;

    // Define a coluna `conteudo` como um texto (pode ser algo longo).
    // Aqui vai o conteúdo detalhado do curso, como o que será ensinado.
    @Column('text')
    conteudo: string;
}
