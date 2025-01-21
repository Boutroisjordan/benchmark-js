import express from 'express';
import cors from "cors";
import menuRouter from '@/src/routes/menus.routes.js';
import franchiseRouter from '@/src/routes/franchises.routes.js';
// import { errorHandler } from '../middlewares/errorMiddlewares';
import logger from "@/src/utils/logger.js"
import rateLimit from 'express-rate-limit';
// import { publishToQueue } from './amqp/publisher';

const allowedOrigins = ['http://localhost:3000', 'http://localhost:3001', "https://jordanboutrois.fr", "https://preprod.jordanboutrois.fr"];

const options: cors.CorsOptions = {
  origin: allowedOrigins,
  credentials: true,
};

const app = express();

const limiter = rateLimit({
  windowMs: 1 * 60 * 1000, //  1 min
  max: 60,
  message: 'Trop de requêtes depuis cette IP, veuillez réessayer après une minute.',
  headers: true, 
});


// Logger Request
app.use((req, res, next) => {
  logger.http(`${req.method} ${req.url} ${req.hostname}`);
  next();
})

// Middlewares
app.use(express.json())
app.use(cors(options));
app.use(limiter);

//Routers
app.use("/menus", menuRouter)
app.use("/franchises", franchiseRouter)


// app.use("/amqp", (req, res) => {
//   publishToQueue("restaurantQueue", "hello world depuis ma grosse queue");
//   res.send("ok");
// })

//Handle routes inexistantes
// app.use("*", (req, res) => {
//   res.status(404).json({
//     status: "error",
//     message: "Route not found"
//   });
// });

export default app;