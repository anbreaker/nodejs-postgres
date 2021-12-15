import { Router } from 'express';
const router = Router();

import { createTask, getTask } from '../controllers/task.controller';

// /api/tasks
router.get('/', getTask);

router.post('/', createTask);

export default router;
