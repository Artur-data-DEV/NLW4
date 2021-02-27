import 'reflect-metadata'
import express, { request } from 'express';
import createConnection from "./database/index";
import { router } from './routes';
import { createConnections } from 'typeorm';

createConnection();
const app = express();

app.use(express.json());
app.use(router);

export{app};