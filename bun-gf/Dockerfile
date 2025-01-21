FROM oven/bun:1-slim as base
WORKDIR /app

# Stage pour les dépendances
FROM base as deps
COPY package.json bun.lockb ./
COPY prisma ./prisma/
RUN bun install --production --frozen-lockfile

# Stage pour le build
FROM base as builder
COPY package.json bun.lockb ./
RUN bun install --frozen-lockfile
COPY . .
# Générer le client Prisma et build
RUN bunx prisma generate && \
    bun run build && \
    # Create a temporary directory for the query engine
    mkdir -p /tmp/prisma-client && \
    cp node_modules/.prisma/client/libquery_engine-*.node /tmp/prisma-client/ && \
    rm -rf node_modules/.prisma/client && \
    mkdir -p node_modules/.prisma/client && \
    cp /tmp/prisma-client/* node_modules/.prisma/client/

# Stage final ultra-léger
FROM oven/bun:1-slim as final
WORKDIR /app

ENV ENV=production

# Copier uniquement les fichiers nécessaires
COPY --from=deps /app/node_modules ./node_modules
COPY --from=builder /app/dist ./dist
COPY --from=builder /app/prisma ./prisma
# Copier le client Prisma généré
COPY --from=builder /app/node_modules/.prisma ./node_modules/.prisma
COPY docker-entrypoint.sh .

RUN chmod +x docker-entrypoint.sh && \
    mkdir -p logs certs

EXPOSE 3001

# ENTRYPOINT ["./docker-entrypoint.sh"]
CMD ["bun", "run", "./dist/index.js"]