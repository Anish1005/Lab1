import React, { useEffect, useState } from 'react';
import axios from 'axios';

const QuizChallenge = () => {
  const [questions, setQuestions] = useState([]);
  const [score, setScore] = useState(0);

  useEffect(() => {
    axios.get('/api/quiz').then(res => setQuestions(res.data));
  }, []);

  const handleAnswer = (isCorrect) => {
    if (isCorrect) setScore(prev => prev + 1);
  };

  return (
    <div>
      <h1>Quick Quiz Challenge</h1>
      {questions.map((q, index) => (
        <div key={index}>
          <p>{q.question}</p>
          {q.options.map((option, idx) => (
            <button key={idx} onClick={() => handleAnswer(option.isCorrect)}>
              {option.text}
            </button>
          ))}
        </div>
      ))}
      <h2>Your Score: {score}</h2>
    </div>
  );
};

export default QuizChallenge;
