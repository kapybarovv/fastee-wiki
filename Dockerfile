FROM node:20-alpine AS builder
WORKDIR /app
COPY package.json .
RUN npm install
COPY docs/ ./docs/
RUN npm run docs:build

FROM nginx:alpine
COPY --from=builder /app/docs/.vitepress/dist /usr/share/nginx/html
