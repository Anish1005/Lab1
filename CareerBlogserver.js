const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

const articles = [{ id: 1, title: 'Career Tips', content: 'Some tips for your career...' }];

app.get('/api/articles', (req, res) => {
  res.json(articles);
});

app.post('/api/contact', (req, res) => {
  console.log(req.body);
  res.sendStatus(200);
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
