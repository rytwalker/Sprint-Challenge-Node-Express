const express = require('express');
const server = express();

const port = 5000;

server.get('/', (req, res) => {
  res.send('What up let get started');
});

server.listen(port, () => console.log(`\nServer running on port ${port}\n`));
