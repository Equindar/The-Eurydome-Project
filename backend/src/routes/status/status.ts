import express from 'express';
import { Response } from 'express';

const router = express.Router();

router.get('/status', (res: Response) => {
  res.status(200).send('Status success.');
});

export default router;
