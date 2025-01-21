import { createMenu, getAll } from '../../src/services/menus.services.js';
export async function getMenus(req, res, next) {
    try {
        const menus = await getAll();
        if (!menus || menus.length > 0) {
            res.status(204).json({ message: " hey" });
            return;
        }
        res.status(200).json(menus);
        return;
    }
    catch (e) {
        console.error("[Error] getMenus: ", e);
        next(e);
    }
}
export async function createNewMenu(req, res, next) {
    try {
        const menuData = req.body;
        const menus = await createMenu(menuData);
        res.status(200).json(menus);
        return;
    }
    catch (e) {
        console.error("[Error] createNewMenu: ", e);
        next(e);
    }
}
