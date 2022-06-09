FROM alpine:latest

WORKDIR /usr/nodeapp

COPY ./package.json ./

RUN npm install

COPY ./ ./

CMD ["npm", "start"]
