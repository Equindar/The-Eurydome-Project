import { Request, Response } from 'express';

export function getMonsters(_req: Request, res: Response) {
  res.json([]);
  res.statusCode = 200;
};

export function getMonsterById(_req: Request, res: Response) {
    res.json({})
    res.statusCode = 200;
  };
  
  