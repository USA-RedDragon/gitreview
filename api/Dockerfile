FROM node:10.15-alpine

WORKDIR /app

ENV NODE_ENV=production

COPY package.json package-lock.json ./

RUN npm ci

COPY . ./

EXPOSE 3000

CMD [ "npm", "run", "start:prod" ]
