const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 5000;

app.use(cors());

const movies = [
  { id: 1, title: 'Inception', year: 2010, genre: 'Sci-Fi' },
  { id: 2, title: 'Interstellar', year: 2014, genre: 'Sci-Fi' },
];

app.get('/api/movies', (req, res) => {
  res.json(movies);
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
