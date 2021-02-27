import 'reflect-metadata'
import express, { NextFunction, request } from 'express';
import "express-async-errors"
import createConnection from "./database/index";
import { router } from './routes';
import { createConnections } from 'typeorm';
import { AppError } from './controllers/errors/AppError';

createConnection();
const app = express();

app.use(express.json());
app.use(router);

app.use((err: Error, request: Request, response: Response, _next: NextFunction) =>{
    if(err instanceof AppError){
        return response.status(err.statusCode).json({
            message: err.message
        })
    }

    return response.status(500).json({
        status: "Error",
        message: `Internal server error ${err.message}`,

    });
});

export{app};