# Первая стадия: устанавливаем curl в Alpine
FROM alpine:latest as curl-builder
RUN apk add --no-cache curl

# Финальная стадия: основной образ n8n
FROM n8nio/n8n:2.3.5

# Копируем конфиги или скрипты (если нужно)
# COPY your-config.json /home/node/.n8n/