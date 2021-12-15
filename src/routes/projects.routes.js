import { Router } from 'express';
const router = Router();

import {
  createProject,
  getProjects,
  getOneProject,
  deleteProject,
  updateProject,
} from '../controllers/project.controller';

// /api/projects/
router.post('/', createProject);

router.get('/', getProjects);

// /api/projects/:projectId
router.get('/:id', getOneProject);

// /api/projects/:projectId
router.put('/:id', updateProject);

// /api/projects/:projectId
router.delete('/:id', deleteProject);

export default router;
