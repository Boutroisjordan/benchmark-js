import prisma from "../../src/utils/prisma.js";
export const getAll = async () => {
    const franchises = await prisma.franchises.findMany();
    return franchises;
};
export async function createFranchise(data) {
    return await prisma.franchises.create({
        data: {
            ...data,
            updatedAt: new Date()
        }
    });
}
export async function updateFranchise(id, data) {
    return await prisma.franchises.update({
        where: { id: id },
        data: {
            ...data,
            updatedAt: new Date()
        }
    });
}
