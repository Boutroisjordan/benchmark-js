import prisma from "../../src/utils/prisma.js";
export const getAll = async () => {
    const menus = await prisma.menus.findMany();
    return menus;
};
export async function createMenu(data) {
    return await prisma.menus.create({
        data: {
            ...data,
            updatedAt: new Date()
        }
    });
}
