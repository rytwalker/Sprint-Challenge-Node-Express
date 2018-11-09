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

module.exports = router;
