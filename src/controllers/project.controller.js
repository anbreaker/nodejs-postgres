import Project from '../models/Project';

export const getProjects = async (req, res) => {
  try {
    const projects = await Project.findAll();
    res.json({
      data: projects,
    });
  } catch (error) {
    res.status(500).json({
      message: 'Something goes wrong',
      data: {},
    });
    console.log(error);
  }
};

export const createProject = async (req, res) => {
  const { name, priority, description, deliverydate } = req.body;

  try {
    let newProject = await Project.create(
      {
        name,
        priority,
        description,
        deliverydate,
      },
      {
        fields: ['name', 'priority', 'description', 'deliverydate'],
      }
    );

    if (newProject) {
      return res.json({
        message: 'Project created successfully',
        data: newProject,
      });
    }
  } catch (error) {
    res.status(500).json({
      message: 'Something goes wrong',
      data: {},
    });
    console.log(error);
  }
};

export const getOneProject = async (req, res) => {
  const { id } = req.params;
  try {
    const project = await Project.findOne({
      where: {
        id,
      },
    });

    res.json({
      data: project,
    });
  } catch (error) {
    console.log(eror);
  }
};

export const updateProject = async (req, res) => {
  const { id } = req.params;
  const { name, priority, description, deliverydate } = req.body;

  const projects = await Project.findAll({
    attributes: ['id', 'name', 'priority', 'description', 'deliverydate'],
    where: {
      id,
    },
  });

  if (projects.length > 0) {
    projects.forEach(async (project) => {
      await project.update({
        name,
        priority,
        description,
        deliverydate,
      });
    });
  }

  return res.json({
    message: 'Project Updated Succesfully',
    data: projects,
  });
};

export const deleteProject = async (req, res) => {
  const { id } = req.params;

  try {
    const deleteRowCount = await Project.destroy({
      where: {
        id,
      },
    });

    res.json({
      message: 'Project Deleted succesfully',
      count: deleteRowCount,
    });
  } catch (error) {
    console.log(error);
  }
};
