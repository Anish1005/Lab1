import React, { useState } from 'react';
import axios from 'axios';

const SalaryEstimator = () => {
  const [salary, setSalary] = useState('');
  const [netSalary, setNetSalary] = useState(null);

  const estimateSalary = () => {
    axios.post('/api/salary', { salary }).then(res => setNetSalary(res.data.netSalary));
  };

  return (
    <div>
      <h1>Quick Salary Estimator</h1>
      <input type="number" placeholder="Gross Salary" value={salary} onChange={e => setSalary(e.target.value)} />
      <button onClick={estimateSalary}>Estimate</button>
      {netSalary && <h2>Your Net Salary: {netSalary}</h2>}
    </div>
  );
};

export default SalaryEstimator;
