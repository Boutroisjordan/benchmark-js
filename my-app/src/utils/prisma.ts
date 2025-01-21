import {PrismaClient} from '@prisma/client';

/**
 * Instance Prisma de l'application
 */
export const prisma = new PrismaClient();

export async function DisconnectPrismaClient() {
  await prisma.$disconnect();
  console.log("[PrismaClient]: Disconnected")
}

export default prisma;