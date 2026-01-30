# Первая стадия: устанавливаем curl в Alpine
FROM alpine:latest as curl-builder
RUN apk add --no-cache curl

# Финальная стадия: основной образ n8n
FROM docker.n8n.io/n8nio/n8n:latest-full

# Копируем curl из первой стадии
COPY --from=curl-builder /usr/bin/curl /usr/bin/curl

# Проверяем, что curl работает
RUN curl --version

# Копируем конфиги или скрипты (если нужно)
# COPY your-config.json /home/node/.n8n/