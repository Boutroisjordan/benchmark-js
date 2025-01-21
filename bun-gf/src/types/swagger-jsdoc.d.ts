declare module 'swagger-jsdoc' {
  export interface Options {
    definition?: {
      openapi: string;
      info: {
        title: string;
        version: string;
        description?: string;
      };
    };
    apis: string[];
  }

  export default function swaggerJSDoc(options: Options): object;
}