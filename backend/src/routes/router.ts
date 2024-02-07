import Logger from 'core/Logger';
import express from 'express';
import { Response } from 'express';

const router = express.Router();

Logger.info('Express Router: /');
router.get('/', (res: Response) => {
  res.status(200).send('Hello World!');
});

export default router;
