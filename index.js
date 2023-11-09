const express = require('express');
const morgan = require('morgan');

const app = express();
const port = 3000;

app.use(morgan('combined'));

app.get('/hello', (req, res) => {
  return res.send('HELLO WORLD!');
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
