import type { Franchises } from '@prisma/client';
import prisma from '../utils/prisma';
import type { CreateFranchiseDTO, UpdateFranchiseDTO } from '../dto/franchises/create-franchise.dto';

/**
 * Récupère toutes les franchises
 */
export const getAll = async (): Promise<Franchises[]> => {
    return await prisma.franchises.findMany();
}

/**
 * Crée une nouvelle franchise
 */
export const createFranchise = async (data: CreateFranchiseDTO): Promise<Franchises> => {
    return await prisma.franchises.create({
        data: {
            ...data,
            updatedAt: new Date()
        }
    });
}

/**
 * Met à jour une franchise existante
 */
export const updateFranchise = async (id: string, data: UpdateFranchiseDTO): Promise<Franchises | null> => {
    return await prisma.franchises.update({
        where: { id },
        data: {
            ...data,
            updatedAt: new Date()
        }
    });
}
