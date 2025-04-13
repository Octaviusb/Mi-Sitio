const express = require('express');
const app = express();
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/octaviusb-website', { useNewUrlParser: true, useUnifiedTopology: true });

app.get('/', (req, res) => {
  res.send('Welcome to my website!');
});

app.listen(3000, () => {
  console.log('Server listening on port 3000');
});