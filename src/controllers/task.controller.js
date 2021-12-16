import Task from '../models/Task';

// TODO error!! Column!
export async function createTask(req, res) {
  try {
    const { name, done, projectid } = req.body;

    const newTask = await Task.create(
      {
        name,
        done,
        projectid,
      },
      { fields: ['name', 'done', 'projectid'] }
    );
    res.json({ message: 'New Task created' });
  } catch (error) {
    console.log(error);

    res.status(500).json({
      message: 'Something goes wrong',
      data: {},
    });
  }
}

export const getTask = async (req, res) => {
  try {
    const tasks = await Task.findAll({
      attributes: ['id', 'name', 'done', 'projectid'],
      order: [['id', 'DESC']],
    });

    res.json({
      tasks,
    });
  } catch (error) {
    console.log(error);

    res.status(500).json({
      message: 'Something goes wrong',
      data: {},
    });
  }
};

export const getOneTask = async (req, res) => {
  try {
    const { id } = req.params;

    const task = await Task.findOne({
      attributes: ['id', 'name', 'done', 'projectid'],
      where: { id },
    });

    res.json(task);
  } catch (error) {
    console.log(error);

    res.status(500).json({
      message: 'Something goes wrong',
      data: {},
    });
  }
};

export const updateTask = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, done, projectid } = req.body;

    const updatedTask = await Task.findOne({
      attributes: ['id', 'name', 'done', 'projectid'],
      where: { id },
    });

    Task.update(
      {
        name,
        done,
        projectid,
      },
      {
        where: { id },
      }
    );

    res.json({
      message: 'Task updated',
      updateTask,
    });
  } catch (error) {
    console.log(error);

    res.status(500).json({
      message: 'Something goes wrong',
      data: {},
    });
  }
};

export const deleteTask = async (req, res) => {
  try {
    const { id } = req.params;

    await Task.destroy({
      where: { id },
    });

    res.json({ message: 'Task Deleted' });
  } catch (error) {
    console.log(error);

    res.status(500).json({
      message: 'Something goes wrong',
      data: {},
    });
  }
};

// TODO error!! Column!
// get to localhost:4000/api/tasks/project/1
export const getTasksByProjets = async (req, res) => {
  try {
    const { projectid } = req.params;

    const tasksByProject = await Task.findAll({
      attributes: ['id', 'name', 'done', 'projectid'],
      where: { projectid },
    });

    res.json(tasksByProject);
  } catch (error) {
    console.log(error);

    res.status(500).json({
      message: 'Something goes wrong',
      data: {},
    });
  }
};
