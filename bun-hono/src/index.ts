import { Hono } from 'hono'
import { cors } from 'hono/cors'
import { csrf } from 'hono/csrf'
import franchises from './controllers/franchises.controller';
import { readFileSync } from "fs"
import * as path from "path"
import { prisma } from './utils/prisma';
import { DisconnectPrismaClient } from './utils/prisma';

const app = new Hono();

//Middlewares
app.use('/', cors())
app.use(
  csrf({
    origin: ['localhost', 'development.myapp.example.com'],
  })
)

//Error Middleware
app.onError((err, c) => {
  console.error(`${err}`)
  return c.text('Custom Error Message', 500)
})

//Routes
app.route("/franchises", franchises)

app.get('/', (c) => {
  return c.text('Hello Hono!')
})


const certsDir = process.env.ENV === "dev"
  ? path.resolve(__dirname, '../certs') // production, accès à la racine du projet
  : path.resolve(__dirname, '../certs');

const certPath = path.join(certsDir, '/server.crt');
const keyPath = path.join(certsDir, '/private.key');


if (process.env.ENV === "dev") {
  // Serveur HTTPS
  Bun.serve({
    fetch: app.fetch,
    port: 443, // Port HTTPS par défaut
    development: false, // Permet des logs supplémentaires (facultatif)
    certFile: certPath,
    keyFile: keyPath,
  });
  console.info("Server starting: https://localhost:443");
} else {
  Bun.serve({
    fetch: app.fetch,
    port: process.env.PORT || 3002, // Port HTTPS par défaut
    development: true,
  });
  console.info("Server starting: https://localhost:443");
}

//Fermer Prisma quand l'application s'arrète
process.on('exit', function (code) {
  DisconnectPrismaClient(prisma)
  return console.log(`Process to exit with code ${code}`);
})
