import { createFranchise, getAll, updateFranchise } from '../../src/services/franchises.services.js';
export async function getFranchises(req, res, next) {
    try {
        const franchises = await getAll();
        if (!franchises || franchises.length <= 0) {
            res.status(204).json({ message: "" });
            return;
        }
        res.status(200).json(franchises);
        return;
    }
    catch (e) {
        console.error("[Error] getFranchises: ", e);
        next(e);
    }
}
export async function createNewFranchise(req, res, next) {
    try {
        const franchiseData = req.body;
        const newFranchise = await createFranchise(franchiseData);
        res.status(201).json(newFranchise);
    }
    catch (e) {
        console.error("[Error] createNewFranchise: ", e);
        next(e);
    }
}
export async function updateExistingFranchise(req, res, next) {
    try {
        const franchiseId = req.params.id;
        const updateData = req.body;
        const updatedFranchise = await updateFranchise(franchiseId, updateData);
        if (!updatedFranchise) {
            res.status(404).json({ message: "Franchise non trouvée" });
            return;
        }
        res.status(200).json(updatedFranchise);
    }
    catch (e) {
        console.error("[Error] updateExistingFranchise: ", e);
        next(e);
    }
}
