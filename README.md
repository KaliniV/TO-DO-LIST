<div align="center">

# Aplicação To-Do List

</div>

![Video exibindo as funcionalidades](./gif/video-display.gif)

## Visão Geral

Esta é uma aplicação full stack de To-Do List, composta por um backend desenvolvido em Java com Spring Boot e um frontend construído com Next.js. A aplicação permite que os usuários gerenciem suas tarefas de forma eficiente.

## Tecnologias Utilizadas

### Backend

- Linguagem: Java

- Framework: Spring Boot

- Banco de Dados: PostgreSQL

- Gerenciador de Dependências: Maven

### Frontend

- Linguagem: JavaScript/TypeScript

- Framework: Next.js

- Estilização: CSS Modules

## Instalação e Configuração

### Backend

1. Clone o repositório:

```bash
git clone https://github.com/KaliniV/TO-DO-LIST
```

2.  Navegue até a pasta do backend:

```bash
cd back/api_rest_to_do_list
```

3. Configure o banco de dados no arquivo application.properties ou application.yml:

```bash

docker-compose up --build
```

4. Compile e execute o projeto:

```bash
mvn spring-boot:run
```

ou, se estiver usando Gradle:

```bash
./gradlew bootRun
```

### Frontend

1. Navegue até a pasta do frontend:

```bash
cd front/to-do-list
```

2. Instale as dependências:

```bash
npm install
```

3. Inicie a aplicação:

```bash
npm run dev
```

## Endpoints da API

### Tarefas

- GET /tasks - Lista todas as tarefas do usuário.

- POST /tasks - Cria uma nova tarefa.

- PUT /tasks/{id} - Atualiza uma tarefa existente.

- DELETE /tasks/{id} - Remove uma tarefa.

## Melhorias Futuras

Adicionar autenticação e autorização.

Implementar testes unitários e de integração.

## Contribuição

Se você deseja contribuir com o projeto, por favor, siga as etapas abaixo:

1.  Fork este repositório.
2.  Crie uma branch com a nova feature ou correção de bug (`git checkout -b feature/nome-da-feature`).
3.  Faça commit das alterações (`git commit -m 'Adiciona nova feature'`).
4.  Envie as alterações (`git push origin feature/nome-da-feature`).
5.  Abra um pull request.

## Conclusão

Este projeto é uma aplicação simples, mas funcional, para gerenciar tarefas. Ele demonstra a integração entre um backend em Spring Boot e um frontend em Next.js, com persistência de dados em PostgreSQL. A estrutura modular e bem organizada facilita a expansão e manutenção do código.

Se precisar de mais detalhes ou ajustes, é só avisar! 😊
