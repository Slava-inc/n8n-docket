#!/bin/sh
set -e

# Проверяем и устанавливаем кастомные ноды
if [ -d "/home/node/.n8n/custom-nodes" ] && [ -f "/home/node/.n8n/custom-nodes/package.json" ]; then
    echo "📦 Установка кастомных нод..."
    cd /home/node/.n8n/custom-nodes
    npm install --production
fi

# Запускаем n8n
exec n8n start