import express from 'express';
import cors from "cors";
import menuRouter from '../src/routes/menus.routes.js';
import franchiseRouter from '../src/routes/franchises.routes.js';
import logger from "../src/utils/logger.js";
import rateLimit from 'express-rate-limit';
const allowedOrigins = ['http://localhost:3000', 'http://localhost:3001', "https://jordanboutrois.fr", "https://preprod.jordanboutrois.fr"];
const options = {
    origin: allowedOrigins,
    credentials: true,
};
const app = express();
const limiter = rateLimit({
    windowMs: 1 * 60 * 1000,
    max: 10,
    message: 'Trop de requêtes depuis cette IP, veuillez réessayer après une minute.',
    headers: true,
});
app.use((req, res, next) => {
    logger.http(`${req.method} ${req.url} ${req.hostname}`);
    next();
});
app.use(express.json());
app.use(cors(options));
app.use(limiter);
app.use("/menus", menuRouter);
app.use("/franchises", franchiseRouter);
export default app;
