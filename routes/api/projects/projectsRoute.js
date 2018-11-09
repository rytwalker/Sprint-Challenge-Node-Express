const express = require('express');
const router = express.Router();

const db = require('../../../data/helpers/projectModel');

// GET all resources
router.get('/', async (req, res) => {
  try {
    const projects = await db.get();
    return !projects
      ? res.status(400).json({ message: 'Something went wrong' })
      : res.status(200).json(projects);
  } catch (error) {
    res.status(500).json({ error: 'There was an error getting the projects' });
  }
});

// GET single resource by id
router.get('/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const project = await db.get(id);
    if (!project) {
      res.status(404).json({ message: 'That project cannot be found.' });
    } else {
      res.status(200).json(project);
    }
  } catch (error) {
    res.status(500).json({ error: 'There was a problem getting that action.' });
  }
});

// GET actions by projects
router.get('/:id/actions', async (req, res) => {
  const { id } = req.params;
  try {
    const projectActions = await db.getProjectActions(id);
    if (!projectActions) {
      res
        .status(400)
        .json({ message: 'There are no project actions... that was bad.' });
    } else {
      res.status(200).json(projectActions);
    }
  } catch (error) {
    res
      .status(500)
      .json({ error: 'There was an error completing this request.' });
  }
});

// POST add a new resource
router.post('/', async (req, res) => {
  const { name, description, completed } = req.body;
  if (!name || !description) {
    res
      .status(400)
      .json({ message: 'Please fill in all required fields. Please.' });
  } else if (name.length > 128) {
    res.status(400).json({
      message: 'Make sure your name is only up to 128 characters.'
    });
  } else {
    try {
      const newProject = await db.insert({
        name,
        description,
        completed
      });
      res.status(201).json(newProject);
    } catch (error) {
      res
        .status(500)
        .json({ error: 'There was an error making a new action.' });
    }
  }
});

// PUT update a resource
router.put('/:id', async (req, res) => {
  const { id } = req.params;
  const { name, description, completed } = req.body;
  if (!name || !description) {
    res
      .status(400)
      .json({ message: 'Please fill in all required fields. Please.' });
  } else if (description.length > 128) {
    res.status(400).json({
      message: 'Make sure your description is only up to 128 characters.'
    });
  } else {
    try {
      const updatedProject = await db.update(id, {
        name,
        description,
        completed
      });
      return !updatedProject
        ? res.status(404).json({ message: 'That project does not exist' })
        : res.status(200).json(updatedProject);
    } catch (error) {
      res
        .status(500)
        .json({ error: 'There was an error making a new project.' });
    }
  }
});

// DELETE resource
router.delete('/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const count = await db.remove(id);
    if (!count) {
      res
        .status(400)
        .json({ message: 'There was an error deleting that project' });
    } else {
      return res.status(200).json(id);
    }
  } catch (error) {
    res.status(500).json({ error: 'Unable to delete resource.' });
  }
});

module.exports = router;
