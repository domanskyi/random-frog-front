FROM node:14-alpine as build-stage

WORKDIR /usr/src/random-frog-front

COPY . .

RUN npm ci --only=production

RUN npm run build

FROM nginx:1.19.9-alpine

COPY --from=build-stage /usr/src/random-frog-front/build /usr/share/nginx/html