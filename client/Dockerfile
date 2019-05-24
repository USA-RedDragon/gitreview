FROM node:10.15-alpine as builder

WORKDIR /app

ENV BASE_URL=/

COPY package.json package-lock.json ./

RUN npm ci

COPY . ./

RUN npm run build

FROM nginx:stable-alpine

COPY --from=builder /app/dist /usr/share/nginx/html

RUN ls /usr/share/nginx/html

COPY nginx.conf /etc/nginx/conf.d

EXPOSE 80
