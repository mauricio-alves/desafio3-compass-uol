## Backend
Para rodar o backend com o docker:
`docker-compose up --build`


Para rodar o seed de dados:
`docker exec -it backend-app-1 sh`
`node dist/database/seed.js`
