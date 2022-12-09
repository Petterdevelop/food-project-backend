FROM node:16-alpine as build-step
RUN mkdir -p /app
WORKDIR /app
COPY package.json /app
RUN npm install
COPY . /app
RUN npm run build

RUN mkdir -p /app/node_modules && mkdir -p /app/dist  && chown -R node:node /app
WORKDIR /app

COPY  --chown=node:node /app/node_modules ./node_modules
COPY  --chown=node:node /app/dist ./dist

USER node

CMD  ["sh", "-c",  "node /app/dist/src/main"]
EXPOSE 3000
