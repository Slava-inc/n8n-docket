# Первая стадия: устанавливаем curl в Alpine
FROM alpine:latest as curl-builder
RUN apk add --no-cache curl

# Финальная стадия: основной образ n8n
FROM n8nio/n8n:2.3.5

# Копируем конфиги или скрипты (если нужно)
# COPY your-config.json /home/node/.n8n/
USER root

# Создаем папку для кастомных нод
RUN mkdir -p /home/node/.n8n/custom-nodes && \
    chown -R node:node /home/node/.n8n

# Копируем entrypoint скрипт
COPY docker-entrypoint.sh /docker-entrypoint.sh
RUN chmod +x /docker-entrypoint.sh && \
    chown node:node /docker-entrypoint.sh

USER node

ENTRYPOINT ["/docker-entrypoint.sh"]