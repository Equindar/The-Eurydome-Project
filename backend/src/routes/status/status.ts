import express from 'express';
import { Request, Response } from 'express';

const router = express.Router();

router.get('/status', (_req: Request, res: Response) => {
  res.setHeader("Content-Type", "application/json");
  res.appendHeader("API-Version", "1.0")
  res.json({msg: "haha"});
  res.statusCode = 200;
});

export default router;
