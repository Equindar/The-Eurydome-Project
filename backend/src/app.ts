import express, { Request, Response, NextFunction } from 'express';
import Logger from './core/Logger';
import cors from 'cors';
import { corsUrl } from './config';
import routes from './routes';

process.on('uncaughtException', (e) => {
  Logger.error(e);
});

const app = express();

app.use(cors({ origin: corsUrl, optionsSuccessStatus: 200 }));

// Routes
//app.use('/', routes);

app.get('/', (request: Request, response: Response) => {
  response.send(request.query);
});

export default app;
