const express = require('express');
const cors = require('cors');
const server = express();

const actions = require('./routes/api/actions/actionsRoute');
const projects = require('./routes/api/projects/projectsRoute');

// Middleware
server.use(express.json());
server.use(cors());
// Use routes
server.use('/api/actions', actions);
server.use('/api/projects', projects);

const port = 5000;
server.listen(port, () => console.log(`\nServer running on port ${port}\n`));
