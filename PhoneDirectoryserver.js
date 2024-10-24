const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

let contacts = [];

app.get('/api/contacts', (req, res) => {
  res.json(contacts);
});

app.post('/api/contacts', (req, res) => {
  const newContact = { id: Date.now(), ...req.body };
  contacts.push(newContact);
  res.json(newContact);
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
