import express, { Request, Response } from 'express';

const router = express.Router();

router.get('/', (_req: Request, res: Response) => {
    res.setHeader("Content-Type", "application/json");
    res.appendHeader("API-Version", "1.0")
    res.json({msg: "monsters"});
    res.statusCode = 200; }
);

export default router;