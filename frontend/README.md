# Gerenciador de Cursos

O **Gerenciador de Cursos** é um sistema simples e eficiente para gerenciar cursos, permitindo listar, adicionar, editar e excluir registros. Ele utiliza **NestJS** para o backend, **PostgreSQL** como banco de dados e **Next.js** para o frontend, oferecendo uma interface amigável e moderna para o usuário.

## Índice

- [Funcionalidades](#funcionalidades)
- [Pré-requisitos](#pré-requisitos)
- [Tecnologias Utilizadas](#tecnologias-utilizadas)
- [Configuração do Projeto](#configuração-do-projeto)
  - [1. Clone o Repositório](#1-clone-o-repositório)
  - [2. Configuração do Backend](#2-configuração-do-backend)
    - [Instale as Dependências](#instale-as-dependências)
    - [Configuração do Banco de Dados](#configuração-do-banco-de-dados)
    - [Rode as Migrações](#rode-as-migrações)
    - [Inicie o Servidor](#inicie-o-servidor)
- [Estrutura do Projeto](#estrutura-do-projeto)
- [Scripts Disponíveis](#scripts-disponíveis)
- [Endpoints Disponíveis](#endpoints-disponíveis)
- [Melhorias Futuras](#melhorias-futuras)

## Funcionalidades

- **Listagem de Cursos**: Visualize todos os cursos cadastrados.
- **Adicionar Novo Curso**: Adicione novos cursos com informações como título, descrição e preço.
- **Editar Curso**: Atualize os detalhes de cursos existentes.
- **Excluir Curso**: Remova cursos indesejados.
- **Ver Detalhes do Curso**: Acesse informações detalhadas de cada curso.

## Pré-requisitos

- **Node.js** (v14 ou superior)
- **npm** ou **yarn** (para instalar as dependências)
- **PostgreSQL** (para armazenar os dados dos cursos)

## Tecnologias Utilizadas

- **Next.js**: Framework React para a interface do usuário.
- **NestJS**: Framework modular para o backend.
- **TypeORM**: ORM para conectar ao banco de dados **PostgreSQL**.
- **Chakra UI**: Biblioteca de componentes React para estilização.
- **Axios**: Biblioteca para fazer requisições HTTP.

## Configuração do Projeto

### 1. Clone o Repositório

```bash
git clone https://github.com/seu-usuario/gerenciador-de-cursos.git
cd gerenciador-de-cursos
```

## Entre em

```
bash
cd frontend
```

## 2. Instale as Dependências

Se estiver usando npm, execute:

```
bash

npm install
```

# 3. Execute o Frontend

```
Bash

npm run dev

```

---

## 2 Backend --

## 2. Instale as Dependências

Se estiver usando npm, execute:

```
bash

npm install
```

# 3. Configure o Banco de Dados

1. Crie o banco de dados PostgreSQL:

Abra o terminal do PostgreSQL e crie um banco de dados chamado postgrees (ou qualquer outro nome de sua escolha, ai você mudar app.module as informações):

```
sql

CREATE DATABASE postgrees;
```

## 1. Configure o arquivo .env:

Renomeie o arquivo .env.example para .env.

Atualize as informações de conexão com o banco de dados no arquivo .env:

```
makefile

TYPEORM_CONNECTION=postgres

TYPEORM_HOST=localhost

TYPEORM_PORT=5432

TYPEORM_USERNAME=seu_usuario

TYPEORM_PASSWORD=sua_senha

TYPEORM_DATABASE=gerenciador_de_cursos

TYPEORM_SYNCHRONIZE=true

TYPEORM_LOGGING=true
```

Certifique-se de substituir seu_usuario e sua_senha pelas credenciais corretas do seu banco de dados PostgreSQL.

## 4. Rode as Migrações do Banco de Dados

Execute o comando abaixo para criar as tabelas necessárias no banco de dados:

Se estiver usando npm:

```
bash

npm run typeorm migration:run
```

## 5. Inicie o Servidor

Agora você pode iniciar o servidor de desenvolvimento:

Usando o npm:

```
bash

npm run start

O backend estará rodando em: http://localhost:3001

Estrutura do Projeto
```

```
bash

backend/

├── src/ # Código fonte principal

│ ├── cursos/ # Módulo de cursos (controllers, services, entidades)

│ ├── database/ # Configuração do banco de dados

│ ├── app.module.ts # Módulo principal do NestJS

│ └── main.ts # Arquivo de inicialização da aplicação

├── .env # Configurações de ambiente (banco de dados, etc)

├── ormconfig.json # Configurações do TypeORM

└── ...
```

Scripts Disponíveis

Estes são os scripts definidos no package.json para facilitar o gerenciamento do projeto:

start: Roda a aplicação em ambiente de produção.

```
bash

npm start

start:dev: Inicia o servidor em modo de desenvolvimento.

```

```
bash

npm run start:dev

typeorm migration:run: Executa as migrações para criar ou atualizar as tabelas no banco de dados.

bash

npm run typeorm migration:run

typeorm migration:generate: Gera novas migrações com base nas alterações feitas nas entidades.

```

```
bash

npm run typeorm migration:generate

Endpoints Disponíveis

Abaixo estão os principais endpoints disponíveis para manipulação de cursos:

GET /cursos: Retorna todos os cursos cadastrados.

POST /cursos: Cria um novo curso.

Body (JSON):

```

```
json

{

"name": "Nome do Curso",

"price": 100,

"duration": 20,

"discountPrice": 80,

"content": "Conteúdo do curso"

}

PUT /cursos/:id: Atualiza as informações de um curso existente.

Body (JSON):

json

{

"name": "Novo Nome do Curso",

"price": 150,

"duration": 25,

"discountPrice": 120,

"content": "Novo conteúdo do curso"

}

DELETE /cursos/:id: Remove um curso pelo seu id.
```

### Melhorias Futuras

Se você quiser melhorar o sistema, algumas ideias são:

Autenticação de Usuário: Implementar um sistema de autenticação para controle de acesso.

Validação de Dados: Adicionar validações ao modelo de curso para garantir dados consistentes.

Feedback de Erro: Melhorar o tratamento de erros e mostrar mensagens claras no frontend.
