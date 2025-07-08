# Desafio 3 - Compass UOL

## Descrição do projeto

Este projeto tem como objetivo desenvolver uma plataforma de eCommerce, utilizando as tecnologias e conhecimentos aprendidos durante o curso. O layout segue o modelo proposto no [Figma](https://www.figma.com/design/xeWC2j7QvUZ7gP3TtC8XvX/eCommerce-Website-%7C-Web-Page-Design-%7C-UI-KIT-%7C-Interior-Landing-Page--Community---Copy-?node-id=0-1&p=f&t=oSLevgJelnpcFIJI-0).
O backend foi desenvolvido com NestJS, utilizando TypeORM com PostgreSQL e conta com uma API REST documentada via Swagger. O ambiente de desenvolvimento é executado com Docker, facilitando a configuração e execução do projeto.
O frontend utiliza React com Vite, consumo da API via Axios, manipulação e validação de formulários com React Hook Form e Yup, além de estilização com Tailwind CSS.
O projeto atende aos critérios de aceite definidos pelos tutores, disponíveis [neste link](https://compasso-my.sharepoint.com/:w:/g/personal/marli_santos_compasso_com_br/EYUVRRjAVspBh_orSsX6Je0BdsZLaT90e_fpYwnOx1dPyw?wdOrigin=TEAMS-WEB.p2p_ns.rwc&wdExp=TEAMS-TREATMENT&wdhostclicktime=1751290305444&web=1).

## Como executar o backend

1. Primeiro, clone este repositório;
2. Abra com qualquer IDE;
3. Abra o terminal, navegue até a pasta raiz do backend e instale as dependências com o comando `npm install`;
4. Crie um arquivo `.env` com base no `.env.example` e configure as variáveis de ambiente;
5. Rode o comando `docker-compose up --build` para fazer a build do projeto;
6. Em outro terminal, rode o comando `docker exec -it backend-app-1 sh` para acessar o shell do container;
7. Então, execute o seed para popular o banco de dados com o comando `node dist/database/seed.js`;
8. Para consultar a API via Swagger, acesse `http://localhost:3000/api`.

## Como executar o frontend

1. Abra o terminal, navegue até a pasta raiz do frontend e instale as dependências com o comando `npm install`;
2. Crie um arquivo `.env` com base no `.env.example` e configure as variáveis de ambiente;
3. Execute o comando `npm run dev`;
4. Uma janela abrirá no seu navegador e a aplicação será executada.

## Tecnologias utilizadas

### Backend

- [NestJS](https://nestjs.com/);
- [Node](https://nodejs.org/pt);
- [TypeScript](https://www.typescriptlang.org/);
- [Swagger](https://swagger.io/);
- [Docker](https://www.docker.com/);
- [PostgreSQL](https://www.postgresql.org/);
- [TypeORM](https://typeorm.io/);

### Frontend

- [React](https://react.dev/);
- [Vite](https://vite.dev/);
- [Tailwind CSS](https://tailwindcss.com/);
- [Axios](https://axios-http.com/ptbr/docs/intro);
- [Yup](https://www.npmjs.com/package/yup);
- [React Hook Form](https://react-hook-form.com/);
- [React Paginate](https://www.npmjs.com/package/react-paginate);
- [React Star Ratings](https://www.npmjs.com/package/react-star-ratings).
