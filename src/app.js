import express, { json } from 'express';
import morgan from 'morgan';

import projectRoutes from './routes/projects.routes';
import taskRoutes from './routes/task.routes';

// Initializations
const app = express();

// format json
app.use(json());

//middlewares
app.use(morgan('dev'));

// routes
app.use('/api/projects', projectRoutes);
app.use('/api/tasks', taskRoutes);

export default app;
