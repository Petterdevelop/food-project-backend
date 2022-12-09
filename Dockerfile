FROM node:16-alpine as build-step
RUN mkdir -p /app
WORKDIR /app
COPY . .
RUN npm install
RUN npm run build
CMD  ["sh", "-c",  "node /app/dist/src/main"]
EXPOSE 3000
