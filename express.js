const express = require('express');
const app = express();

app.use(express.json()); // JSONパース自動化

app.get('/', (req, res) => {
  res.send('Hello World');
});

app.get('/api/users', (req, res) => {
  res.json({ users: ['Alice', 'Bob'] });
});

app.post('/api/users', (req, res) => {
  res.status(201).json({ message: 'Created', data: req.body });
});

app.listen(3000);