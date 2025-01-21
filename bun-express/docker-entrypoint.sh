#!/bin/sh
set -e

echo "Running database migrations..."
bunx prisma migrate deploy

# echo "Generating client"
# bunx prisma generate

echo "Starting application..."
exec "$@"