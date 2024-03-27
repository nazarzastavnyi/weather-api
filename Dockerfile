FROM node:18-alpine as builder

# Create app directory
WORKDIR /usr/src/app

ARG APP_PORT=3000

COPY package.json ./

RUN npm install

COPY . .

RUN npm run build

EXPOSE ${APP_PORT}

ENTRYPOINT [ "./startup.sh" ]
