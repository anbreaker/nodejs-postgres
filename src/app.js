import express, { json } from 'express';
import morgan from 'morgan';

import projectRoutes from './routes/projects.routes';
import taskRoutes from './routes/task.routes';

// Initializations
const app = express();

//middlewares
app.use(morgan('dev'));

// routes
app.use('api/projects', projectRoutes);
app.use('api/tasks', taskRoutes);

// format json
app.use(json());

export default app;
