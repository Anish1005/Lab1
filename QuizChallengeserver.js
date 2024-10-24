const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

const quizQuestions = [
  {
    question: 'What is 2 + 2?',
    options: [{ text: '3', isCorrect: false }, { text: '4', isCorrect: true }],
  },
];

app.get('/api/quiz', (req, res) => {
  res.json(quizQuestions);
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
