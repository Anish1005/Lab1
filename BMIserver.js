const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

app.post('/api/bmi', (req, res) => {
  const { weight, height } = req.body;
  const bmi = weight / (height * height);
  res.json({ bmi });
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
