import express from 'express';
import { getStatus } from '../controllers/status/status';
import monsters from './monsters/monsters';

/**
 * Router Instance of express
 */
const router = express.Router();

/**
 * @summary this is a summary
 * @param no params required
 * @returns the status of the server
 */
router.get('/status', getStatus);
router.use('/monsters', monsters);

export default router;
