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

module.exports = router;
