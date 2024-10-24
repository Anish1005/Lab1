import React, { useState } from 'react';

const BillCalculator = () => {
  const [amount, setAmount] = useState('');
  const [tip, setTip] = useState('');
  const [total, setTotal] = useState(null);

  const calculateTotal = () => {
    const totalAmount = parseFloat(amount) + (parseFloat(amount) * (parseFloat(tip) / 100));
    setTotal(totalAmount);
  };

  return (
    <div>
      <h1>Bill Calculator Tool</h1>
      <input type="number" placeholder="Amount" value={amount} onChange={e => setAmount(e.target.value)} />
      <input type="number" placeholder="Tip (%)" value={tip} onChange={e => setTip(e.target.value)} />
      <button onClick={calculateTotal}>Calculate</button>
      {total && <h2>Total Amount: {total}</h2>}
    </div>
  );
};

export default BillCalculator;
