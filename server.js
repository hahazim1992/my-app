const express = require('express');
const cors = require('cors'); // <-- add this
const { Client } = require('pg');

const app = express();
const port = process.env.PORT || 3000;

app.use(cors()); // <-- enable CORS for all origins
app.use(express.json()); // <-- parse JSON bodies in requests

// Connect to PostgreSQL
const client = new Client({
  host: 'dpg-d00c0r9r0fns73e49nqg-a',
  user: 'db_e2e_testing_user',
  password: '6WDVw6awVmKX1knj93AzKTsWzcFbBmmQ',
  database: 'db_e2e_testing',
  port: 5432,
});

client.connect(err => {
  if (err) throw err;
  console.log('Connected to the PostgreSQL database');
});

// POST endpoint
app.post('/data', (req, res) => {
  const { name } = req.body;
  console.log('Received data:', name);

  // Just echo back the data for now
  res.json({ message: 'Data saved successfully', name });
});

// GET endpoint
app.get('/data', (req, res) => {
  res.json({ message: 'Fetched data successfully' });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
