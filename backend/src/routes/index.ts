import Logger from 'core/Logger';
import express from 'express';
import status from './status/status';

const router = express.Router();

router.use('/status', status);

Logger.info('Express Router: /');

export default router;
