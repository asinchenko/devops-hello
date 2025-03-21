FROM node:22-alpine
LABEL maintainer="wonderfulsanchez@gmail.com" 
COPY . /src
WORKDIR /src
EXPOSE 8080
ENTRYPOINT ["node", "./app.js"]
