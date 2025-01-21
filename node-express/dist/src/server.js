import app from "../src/app";
import fs from "fs";
import https from 'https';
import swaggerDocs from "../src/utils/swagger.js";
import { DisconnectPrismaClient } from "../src/utils/prisma.js";
import path from "path";
import { startConsumers } from "../src/amqp/consumerManager.js";
import { connectRabbitMQ } from "../src/amqp/connection.js";
import '../src/utils/datadog.js';
const __filename = import.meta.dirname;
const __dirname = path.dirname(__filename);
const PORT = parseInt(process.env.PORT) ?? 3000;
const ENV = process.env.ENV ?? "prod";
const certsDir = ENV === "prod"
    ? path.resolve(__dirname, '../certs')
    : path.resolve(__dirname, './certs');
const certPath = path.join(certsDir, 'server.crt');
const keyPath = path.join(certsDir, 'private.key');
(async () => {
    try {
        if (ENV != "dev") {
            await connectRabbitMQ();
            await startConsumers();
        }
        startHttpsServer(ENV, certPath, keyPath, PORT, app);
        if (ENV === "dev") {
            startHttpServer(app, PORT + 1);
        }
    }
    catch (error) {
        console.error('Failed to start server:', error);
        process.exit(1);
    }
})();
process.on('exit', function (code) {
    DisconnectPrismaClient();
    return console.log(`Process to exit with code ${code}`);
});
function startHttpsServer(env, certPath, keyPath, port, app) {
    try {
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
    }
    catch (e) {
        console.error("Error starting HTTPS server:", e.message);
        process.exit(1);
    }
}
function startHttpServer(app, port) {
    app.listen(port, () => {
        console.log(`[HTTP] Express is listening at http://localhost:${port}`);
        swaggerDocs(app, port);
        return;
    });
}
