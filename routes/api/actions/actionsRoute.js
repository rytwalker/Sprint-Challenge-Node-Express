const express = require('express');
const router = express.Router();

const db = require('../../../data/helpers/actionModel');

// GET all resources
router.get('/', async (req, res) => {
  try {
    const actions = await db.get();
    return !actions
      ? res.status(400).json({ message: 'Something went wrong' })
      : res.status(200).json(actions);
  } catch (error) {
    res.status(500).json({ error: 'There was an error getting the actions' });
  }
});

// GET single resource
router.get('/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const action = await db.get(id);
    if (!action) {
      res.status(404).json({ message: 'That action cannot be found.' });
    } else {
      res.status(200).json(action);
    }
  } catch (error) {
    res.status(500).json({ error: 'There was a problem getting that action.' });
  }
});

// POST add a new resource
router.post('/', async (req, res) => {
  const { project_id, description, notes, completed } = req.body;
  if (!project_id || !description || !notes) {
    res.status(400).json({ message: 'Please fill in all required fields' });
  } else if (description.length > 128) {
    res
      .status(400)
      .json({
        message: 'Make sure your description is only up to 128 characters.'
      });
  } else {
    try {
      const newAction = await db.insert({
        project_id,
        description,
        notes,
        completed
      });
      res.status(201).json(newAction);
    } catch (error) {
      res
        .status(500)
        .json({ error: 'There was an error making a new action.' });
    }
  }
});

module.exports = router;
