const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

app.post('/api/bill', (req, res) => {
  const { amount, tip } = req.body;
  const totalAmount = parseFloat(amount) + (parseFloat(amount) * (parseFloat(tip) / 100));
  res.json({ total: totalAmount });
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
