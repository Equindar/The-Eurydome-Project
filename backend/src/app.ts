import express, { Request, Response, NextFunction } from 'express';
import Logger from './core/Logger';
import cors from 'cors';
import { corsUrl, environment } from './config';

process.on('uncaughtException', (e) => {
  Logger.error(e);
});

const app = express();

app.use(cors({ origin: corsUrl, optionsSuccessStatus: 200 }));

app.get('/', (_req: Request, res: Response) => {
    res.send('Welcome to Express & TypeScript Server');
  });

// Routes
//app.use('/', express.Router());

export default app;