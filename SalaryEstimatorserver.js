const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

app.post('/api/salary', (req, res) => {
  const { salary } = req.body;
  const tax = salary * 0.2; // Example tax rate
  const netSalary = salary - tax;
  res.json({ netSalary });
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
