const express = require('express');

var app = express();

app.get('/', (req, res) => {
  res.send('hello Express!')
});

app.listen(3000);
