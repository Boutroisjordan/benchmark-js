# syntax=docker/dockerfile:1

# Utiliser une version plus légère de node
FROM node:22.13.0-alpine As base
# Installer uniquement les dépendances système critiques
RUN apk add --no-cache libc6-compat
WORKDIR /usr/src/app

# Stage pour les dépendances
FROM base As deps
COPY package*.json ./
COPY prisma ./prisma/
RUN --mount=type=cache,target=/root/.npm \
    npm ci --ignore-scripts && \
    npm cache clean --force && \
    rm -rf /root/.npm/*

# Stage pour le build
FROM deps As build
COPY . .
# Combiner les commandes pour réduire les layers
RUN npx prisma generate && \
    npm run build && \
    # Nettoyer les fichiers non nécessaires
    rm -rf src/ tests/ node_modules/ prisma/migrations/*.sql

# Stage final ultra-léger
FROM node:22.13.0-alpine As final
RUN apk add --no-cache libc6-compat && \
    addgroup -g 1001 -S nodejs && \
    adduser -S nodejs -u 1001

WORKDIR /usr/src/app
ENV NODE_ENV production

# Copier uniquement les fichiers essentiels
COPY --chown=nodejs:nodejs package*.json ./
COPY --chown=nodejs:nodejs prisma ./prisma/
COPY --chown=nodejs:nodejs docker-entrypoint.sh .

# Installation minimale et nettoyage
RUN --mount=type=cache,target=/root/.npm \
    npm ci --omit=dev --no-audit --no-fund --ignore-scripts && \
    npx prisma generate
RUN npm cache clean --force && \
    rm -rf /tmp/* && \
    chmod +x docker-entrypoint.sh

# Copier les fichiers buildés
COPY --chown=nodejs:nodejs --from=build /usr/src/app/dist ./dist

# Create the logs directory before switching user
RUN mkdir -p /usr/src/app/logs && \
    chown -R nodejs:nodejs /usr/src/app/logs

USER nodejs

EXPOSE 3002

# ENTRYPOINT ["./docker-entrypoint.sh"]
CMD ["node", "--no-deprecation", "./dist/src/server.js"]