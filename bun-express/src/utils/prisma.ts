import pkg from '@prisma/client';
const { PrismaClient } = pkg;

/**
 * Instance Prisma de l'application
 */
export const prisma = new PrismaClient();

export async function DisconnectPrismaClient() {
  await prisma.$disconnect();
  console.log("[PrismaClient]: Disconnected")
}

export default prisma;