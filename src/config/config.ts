import { ConfigProps } from "./config.interface";

export const config = ():ConfigProps => ({
    port: parseInt(process.env.PORT, 10) || 8080,
    api: {
      apiUrl: process.env.API_URL,
      httpTimeout: 1000,
    },
    mongodb: {
      database: {
        connectionString: process.env.MONGODB_CONNECTION_STRING || 'mongodb+srv://akbasu:<password>@cluster0.0ufys7f.mongodb.net/?retryWrites=true&w=majority',
        databaseName: process.env.NODE_ENV || 'local'
      }
    }
   });