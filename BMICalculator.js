import React, { useState } from 'react';
import axios from 'axios';

const BMICalculator = () => {
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [bmi, setBmi] = useState(null);

  const calculateBMI = () => {
    axios.post('/api/bmi', { weight, height }).then(res => setBmi(res.data.bmi));
  };

  return (
    <div>
      <h1>BMI Calculator</h1>
      <input type="number" placeholder="Weight (kg)" value={weight} onChange={e => setWeight(e.target.value)} />
      <input type="number" placeholder="Height (m)" value={height} onChange={e => setHeight(e.target.value)} />
      <button onClick={calculateBMI}>Calculate</button>
      {bmi && <h2>Your BMI: {bmi}</h2>}
    </div>
  );
};

export default BMICalculator;
