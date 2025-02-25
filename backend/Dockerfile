FROM node:20-alpine

WORKDIR /app/backend

COPY package*.json pnpm-lock.yaml ./

RUN npm install -g pnpm

RUN pnpm install --frozen-lockfile

COPY . .

RUN pnpm build

RUN pnpm store prune

EXPOSE 3000

CMD ["pnpm", "run", "start:prod"]
