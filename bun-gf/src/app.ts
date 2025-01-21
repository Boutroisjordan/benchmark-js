import express, { type Request, type Response } from 'express';
import cors from 'cors'
import menuRouter from '@/src/routes/menus.routes';
import franchiseRouter from '@/src/routes/franchises.routes';
import "@/src/utils/datadog"
const allowedOrigins = ['http://localhost:3000', 'http://localhost:3001', "https://jordanboutrois.fr", "https://preprod.jordanboutrois.fr"];

const options: cors.CorsOptions = {
  origin: allowedOrigins,
  credentials: true,
};

const app = express();

// Logger Request
// app.use((req, res, next) => {
//   logger.http(`${req.method} ${req.url} ${req.hostname}`);
//   next();
// })

// Middlewares
app.use(express.json());
app.use(cors(options));


//Routers
// app.use("/", (req: Request,res: Response) => {
//   res.send("Hello");
// });
app.use("/menus", menuRouter);
app.use("/franchises", franchiseRouter);

export default app;