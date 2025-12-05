# === Stage 1: Build ===
# Используем node:22-slim (Debian), так как он совместимее с нативными модулями, чем Alpine
FROM node:22-slim AS build

# Устанавливаем pnpm через corepack (встроен в Node.js)
ENV PNPM_HOME="/pnpm"
ENV PATH="$PNPM_HOME:$PATH"
RUN corepack enable

WORKDIR /app

# Копируем конфиги пакетов
COPY package.json pnpm-lock.yaml* ./

# Устанавливаем зависимости.
# Используем --prod=false, чтобы установить ВСЕ зависимости (и dev, и prod),
# так как 'nuxt build' требует devDependencies для сборки.
# Если локального pnpm-lock.yaml нет или он битый, убираем --frozen-lockfile
RUN pnpm install --frozen-lockfile || pnpm install

# Копируем исходный код
COPY . .

# Собираем проект
# Это создаст папку .output с готовым сервером
RUN pnpm build

# === Stage 2: Production Run ===
# Для запуска используем легкий образ
FROM node:22-slim

WORKDIR /app

# Настраиваем переменные окружения для Nuxt (Nitro)
ENV NODE_ENV=production
ENV NUXT_HOST=0.0.0.0
ENV NUXT_PORT=3000

# Копируем ТОЛЬКО результаты сборки из предыдущего этапа.
# Папка .output полностью автономна и не требует node_modules
COPY --from=build /app/.output /app/.output

# Открываем порт
EXPOSE 3000

# Запускаем сервер
CMD ["node", ".output/server/index.mjs"]