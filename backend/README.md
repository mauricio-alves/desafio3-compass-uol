## Backend
Para buildar e rodar o backend com o docker:
`docker-compose up --build`

Para apagar o banco de dados:
`docker-compose down -v`

Para acessar o shell do container:
`docker exec -it backend-app-1 sh`

Para rodar o seed de dados e popular o banco:
`node dist/database/seed.js`

Para acessar o Swagger:
`http://localhost:3000/api`
