## Backend
Para buildar e rodar o backend com o docker:
`docker-compose up --build`

Para apagar o banco de dados:
`docker-compose down -v`

Para rodar o seed de dados e popular o banco de dados:
`docker exec -it backend-app-1 sh`
`node dist/database/seed.js`

Para acessar o shell do container
`docker exec -it backend-app-1 sh`
