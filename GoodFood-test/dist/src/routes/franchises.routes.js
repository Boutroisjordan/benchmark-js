import { Router } from 'express';
import { createNewFranchise, getFranchises } from '../../src/controllers/franchises.controller.js';
import { validateData } from "../../src/middlewares/validatorMiddlewares.js";
import { createFranchiseSchema } from "../../src/validators/franchises.validator.js";
const franchiseRouter = Router();
franchiseRouter.get("/", getFranchises);
franchiseRouter.post("/", validateData(createFranchiseSchema), createNewFranchise);
export default franchiseRouter;
