import React, { useState } from 'react';
import axios from 'axios';

const SavingsCalculator = () => {
  const [principal, setPrincipal] = useState('');
  const [rate, setRate] = useState('');
  const [time, setTime] = useState('');
  const [interest, setInterest] = useState(null);

  const calculateInterest = () => {
    axios.post('/api/savings', { principal, rate, time }).then(res => setInterest(res.data.interest));
  };

  return (
    <div>
      <h1>Savings Interest Calculator</h1>
      <input type="number" placeholder="Principal" value={principal} onChange={e => setPrincipal(e.target.value)} />
      <input type="number" placeholder="Rate (%)" value={rate} onChange={e => setRate(e.target.value)} />
      <input type="number" placeholder="Time (years)" value={time} onChange={e => setTime(e.target.value)} />
      <button onClick={calculateInterest}>Calculate</button>
      {interest && <h2>Interest Earned: {interest}</h2>}
    </div>
  );
};

export default SavingsCalculator;
