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

// /api/projects/:projectid
router.get('/:id', getOneProject);

// /api/projects/:projectid
router.put('/:id', updateProject);

// /api/projects/:projectid
router.delete('/:id', deleteProject);

export default router;
