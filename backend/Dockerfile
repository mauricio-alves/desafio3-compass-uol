FROM node:20-alpine

WORKDIR /usr/src/app

RUN apk update && apk upgrade

COPY package*.json ./
RUN npm install

COPY . .

RUN npm run build

CMD ["node", "dist/main.js"]
