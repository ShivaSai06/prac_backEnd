require('dotenv').config();
const express = require('express');
const app = express();
const port = 4000;

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.get('/tele', (req, res) => {
  res.send('ironman@62003');
});

app.get('/login', (req, res) => {
  res.send('<h1>Sensaverse</h1>');
});

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`);
});
