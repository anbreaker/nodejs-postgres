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
  const tasks = await Task.findAll({
    attributes: ['id', 'name', 'done', 'projectid'],
    order: [['id', 'DESC']],
  });

  res.json({
    tasks,
  });
};

export const getOneTask = (req, res) => {};

export const updateTask = (req, res) => {};

export const getTasksByProjets = (req, res) => {};

export const deleteTask = (req, res) => {};
