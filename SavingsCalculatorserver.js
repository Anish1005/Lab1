const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

app.post('/api/savings', (req, res) => {
  const { principal, rate, time } = req.body;
  const interest = (principal * rate * time) / 100;
  res.json({ interest });
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
