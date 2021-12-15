import { Router } from 'express';
const router = Router();

import { createTask } from '../controllers/task.controller';

// /api/tasks
router.post('/', createTask);

export default router;
