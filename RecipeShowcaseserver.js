const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 5000;

app.use(cors());

const recipes = [
  { id: 1, title: 'Pasta', instructions: 'Boil pasta and add sauce.' },
  { id: 2, title: 'Salad', instructions: 'Mix vegetables and dressing.' },
];

app.get('/api/recipes', (req, res) => {
  res.json(recipes);
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
