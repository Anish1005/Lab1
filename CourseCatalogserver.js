const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 5000;

app.use(cors());

const courses = [
  { id: 1, title: 'JavaScript Basics', description: 'Learn the basics of JavaScript.' },
  { id: 2, title: 'React for Beginners', description: 'Get started with React.' },
];

app.get('/api/courses', (req, res) => {
  res.json(courses);
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
