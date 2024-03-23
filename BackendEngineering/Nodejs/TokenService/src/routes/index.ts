import express from 'express';

import { TokenController } from '../controllers/TokenController';

const router = express.Router();

router.get('/', TokenController.generateToken);

export default router;
