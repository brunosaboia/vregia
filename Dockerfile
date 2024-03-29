FROM node:12.17.0-alpine3.11

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm i

COPY . .

RUN npm run build

EXPOSE 3000

CMD ["npm", "run", "start"]