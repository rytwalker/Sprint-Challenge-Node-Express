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
    res.status(500).json({ error: 'There was an error getting the actions' });
  }
});

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

module.exports = router;
