# Projeto

Este projeto é dividido em **server** e **client**.

---

## Como rodar o projeto

### Rodando o servidor

Abra o terminal na pasta **server** e execute:

```bash
npm run dev
```

Após isso, o servidor estará rodando em **localhost:3333** e irá **prover os arquivos da pasta `dist`**, que fica dentro da pasta **client**.

## Rodando em um dispositivo móvel na mesma rede

1. No projeto, acesse a pasta:  `client/src/services`

2. Abra o arquivo `configs.ts` e altere a `baseURL` de: `http://localhost:3333`

   para o **IP local da máquina na rede**, por exemplo: `http://192.168.0.15:3333`

3. Inicie o servidor e, no celular, acesse: `http://IP_DA_MAQUINA_LOCAL:3333`

---

### Atualizando o client

Sempre que houver qualquer modificação no código do **client**, é necessário gerar novamente a build.

Abra o terminal na pasta **client** e execute:

```bash
npm run build
```

Isso atualiza a pasta `dist`, permitindo que o servidor sirva a versão mais recente do projeto.

---

## Arquitetura do projeto

O projeto consiste em uma **API Node.js** com um banco de dados **SQLite**.

O SQLite foi escolhido pela sua **simplicidade e praticidade**, sendo suficiente para o escopo deste teste e facilitando a execução local do projeto sem dependências externas.

---

### Servidor

O servidor é uma **API Node.js** que trabalha com **Content-Type JSON**.

Principais tecnologias utilizadas:

- **Node.js**
- **SQLite**
- **Knex** para conexão com o banco de dados
  - Migrations
  - Seeds
- **Zod** para validação e tipagem de dados
- **bcrypt** para encriptação de senhas
- **JSON Web Token (JWT)** para autenticação de usuários

Toda a comunicação entre client e server é feita via JSON.

---

### Client

O client foi desenvolvido em **React**, utilizando o **Vite** para criação e build do projeto.

Também é utilizado **TypeScript**, com o objetivo de manter uma tipagem mais segura e organizada.

Após a build, o client gera a pasta `dist`, que é servida pelo servidor.

---

## Estrutura do projeto

### Client (`src`)

- **components** – componentes reutilizáveis da interface
- **contexts** – contextos globais da aplicação
- **hooks** – hooks customizados
- **pages** – páginas da aplicação
- **routes** – definição das rotas
- **services** – comunicação com a API
- **types** – tipagens e interfaces TypeScript

---

### Server

- **configs** – configurações gerais do projeto
- **controllers** – controle das requisições e comunicação com o banco
- **database** – configurações do banco, migrations e seeds
- **middlewares** – middlewares da aplicação
- **routes** – definição das rotas do projeto
- **types** – tipagens utilizadas no servidor
- **utils** – funções utilitárias, como tratamento de erros (ex: `ApiError`)

### Aplicação

Usuários cadastrados:

- Email:
`caio@email.com
fred@email.com
eduardo@email.com
geovana@email.com
carlos@email.com`

- Senha: 123456
