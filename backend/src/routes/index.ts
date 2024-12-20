import express from 'express';
import status from './status/status';

/**
 * Router Instance of express
 */
const router = express.Router();

/**
 * @summary this is a summary
 * @param no params required
 * @returns the status of the server
 */
router.get('/status', status);

export default router;
