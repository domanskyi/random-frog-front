FROM node:14 as build-stage

WORKDIR /usr/src/random-frog-front

COPY . .

RUN npm ci --only=production

RUN npm run build

FROM nginx:1.15

COPY --from=build-stage /usr/src/random-frog-front/build /usr/share/nginx/html
COPY --from=build-stage /usr/src/random-frog-front/nginx.conf /etc/nginx/conf.d/default.conf 