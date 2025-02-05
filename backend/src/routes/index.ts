import express from 'express';
import { getStatus } from '../controllers/status/status';
import monsters from './monsters/monsters';
import auth from './auth';

/**
 * Router Instance of express
 */
const router = express.Router();

/**
 * @summary this is a summary
 * @param no params required
 * @returns the status of the server
 */
router.use('/monsters', monsters);
router.use('/auth', auth);
router.get('/login', getStatus);
router.get('/status', getStatus);


export default router;
