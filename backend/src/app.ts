import express, { Request, Response, NextFunction } from 'express';
import Logger from './core/Logger';
import cors from 'cors';
import { corsUrl } from './config';
import router from 'routes/router';

process.on('uncaughtException', (e) => {
  Logger.error(e);
});

const app = express();

app.use(cors({ origin: corsUrl, optionsSuccessStatus: 200 }));

// Routes
app.use('/', router);

export default app;