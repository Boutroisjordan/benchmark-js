#!/bin/sh
set -e

echo "Running database migrations..."
npx prisma migrate deploy

echo "Seed database"
npm run seed

echo "Starting application..."
exec "$@"