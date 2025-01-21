import * as swaggerUi from "swagger-ui-express"
import type { Express, Request, Response } from "express";
// import json from "package.json" with { type: "json" };
import swaggerJSDoc from 'swagger-jsdoc';

  
  const options = {
      swaggerDefinition: {
         openapi: '3.0.0',
          info: {
              title: 'Hello World',
              version: "0.1.0",
            },
          },
          apis: ['./src/routes/*.ts','./src/routes*.js'],
        };
        
  const swaggerSpecification = swaggerJSDoc(options);
// const swaggerSpecification = swaggerJSDoc(options);

export default function swaggerDocs(app: Express, port: number) {
  app.use("/api", swaggerUi.serve, swaggerUi.setup(swaggerSpecification))

  app.get("/docs.json", ( _: Request, res: Response) => {
    res.setHeader("Content-Type", "application/json")
    res.send(swaggerSpecification)
    })

console.log(`Docs available at http://localhost:${port}/api`)
}