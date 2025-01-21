import { Hono } from 'hono';
import { getAll, createFranchise, updateFranchise } from '../services/franchises.service';
import {zValidator} from "@hono/zod-validator";
import { createFranchiseSchema } from '../validators/franchises.validator';

const franchises = new Hono();

/**
 * Récupère toutes les franchises
 */
franchises.get('/', async (c) => {
    try {
        const franchises = await getAll();
        if (!franchises || franchises.length <= 0) {
            return c.json({}); // 204 No Content
        }
        return c.json(franchises, 200); // 200 OK
    } catch (e) {
        console.error("[Error] getFranchises: ", e);
        return c.json({ message: 'Internal Server Error' }, 500); // 500 Internal Server Error
    }
});

/**
 * Crée une nouvelle franchise
 */
franchises.post('/',zValidator('json', createFranchiseSchema), async (c) => {
    try {
        const franchiseData = await c.req.json();
        const newFranchise = await createFranchise(franchiseData);
        return c.json(newFranchise, 201); // 201 Created
    } catch (e) {
        console.error("[Error] createNewFranchise: ", e);
        return c.json({ message: 'Internal Server Error' }, 500); // 500 Internal Server Error
    }
});

/**
 * Met à jour une franchise existante
 */
franchises.put('/:id', async (c) => {
    try {
        const franchiseId = c.req.param('id');
        const updateData = await c.req.json();
        
        const updatedFranchise = await updateFranchise(franchiseId, updateData);

        if (!updatedFranchise) {
            return c.json({ message: "Franchise non trouvée" }, 404); // 404 Not Found
        }

        return c.json(updatedFranchise, 200); // 200 OK
    } catch (e) {
        console.error("[Error] updateExistingFranchise: ", e);
        return c.json({ message: 'Internal Server Error' }, 500); // 500 Internal Server Error
    }
});

export default franchises;
