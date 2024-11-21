// Create web server
const express = require('express');
const app = express();

// Create a path for comments
app.get('/comments', (req, res) => {
  res.send('This is the comments path');
});

// Start the server
app.listen(4001, () => {
  console.log('Server is listening on port 4001');
});