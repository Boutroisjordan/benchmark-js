import app from "@/src/app";
import type { Express } from "express";
import path from "path";
import fs from "fs";
import prisma, { DisconnectPrismaClient } from "./src/utils/prisma";
import swaggerDocs from "./src/utils/swagger";
import https from "https";
import { connectRabbitMQ } from "./src/amqp/connection";
import { startConsumers } from "./src/amqp/consumerManager";


// Récupérer le chemin projet root (__dirname en ES module ça marche pas)
const __dirname = import.meta.dirname
// const __dirname = path.dirname(__filename);

//Check si port est set sinon go sur 3000
const PORT: number = process.env.PORT ? parseInt(process.env.PORT, 10) || 3001 : 3001;
const ENV: string = process.env.ENV ?? "dev";

// Chemin des certificats 

const certsDir = ENV === "dev"
  ? path.resolve(__dirname, '../certs') // production, accès à la racine du projet
  : path.resolve(__dirname, './certs');


const certPath = path.join(certsDir, 'server.crt');
const keyPath = path.join(certsDir, 'private.key');


console.log(certPath);

(async () => {
  try {

    //Lance Connection et consummer RabbitMQ
    if (ENV === "production") {
      await connectRabbitMQ();
      await startConsumers();
    }

    startHttpsServer(ENV, certPath, keyPath, PORT, app)

    if (ENV === "dev") {
      startHttpServer(app, PORT)
    }

  } catch (error) {
    console.error('Failed to start server:', error);
    process.exit(1);
  }
})();

//Fermer Prisma quand l'application s'arrète
process.on('exit', function (code) {
  DisconnectPrismaClient(prisma)
  return console.log(`Process to exit with code ${code}`);
})


/**
 * Démarre le serveur https
 */
function startHttpsServer(env: string, certPath: string, keyPath: string, port: number, app: Express) {
  try {

    //check si cert ou key est ok
    if (!fs.existsSync(certPath)) {
      throw new Error(`Certificate file not found at: ${certPath}`);
    }

    if (!fs.existsSync(keyPath)) {
      throw new Error(`Private key file not found at: ${keyPath}`);
    }

    const httpsOptions = {
      key: fs.readFileSync(keyPath, "utf-8"),
      cert: fs.readFileSync(certPath, "utf-8"),
    };

    https.createServer(httpsOptions, app).listen(port, () => {
      console.log(`[HTTPS] Express is running at https://localhost:${port}`);
    });
  } catch (e: any) {
    console.error("Error starting HTTPS server:", e.message);
    process.exit(1);
  }
}

/**
 * Démarre le serveur http
 */
function startHttpServer(app: Express, port: number) {
  app.listen(port, () => {
    console.log(`[HTTP] Express is listening at http://localhost:${port}`);
    swaggerDocs(app, port)
    return;
  });
}
