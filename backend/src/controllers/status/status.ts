import { Request, Response } from 'express';

export function getStatus(_req: Request, res: Response) {
  res.setHeader("Content-Type", "application/json");
  res.appendHeader("API-Version", "1.0")
  res.json({msg: "haha"});
  res.statusCode = 200;
};

