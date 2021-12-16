import { Router } from 'express';
const router = Router();

import {
  createTask,
  getTask,
  getOneTask,
  getTasksByProjets,
  deleteTask,
  updateTask,
} from '../controllers/task.controller';

// /api/tasks
router.get('/', getTask);

router.post('/', createTask);

// /api/tasks/:id
router.get('/:id', getTasksByProjets);

router.patch('/:id', updateTask);

router.delete('/:id', deleteTask);

// /api/tasks/project/:projectid
router.get('/project/:projectid', getOneTask);

export default router;
