import express from 'express';

const app = express();

app.get('/', (req, res) => {
  res.json({ hello: 'alooo' });
});

app.listen(3333);