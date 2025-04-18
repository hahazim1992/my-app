const express = require('express');
const { Client } = require('pg');

const app = express();
const port = process.env.PORT || 3000;

// Connect to PostgreSQL using the connection details from Render
const client = new Client({
  host: 'dpg-d00c0r9r0fns73e49nqg-a',
  user: 'db_e2e_testing_user',
  password: '6WDVw6awVmKX1knj93AzKTsWzcFbBmmQ',
  database: 'db_e2e_testing',
  port: 5432, // Default PostgreSQL port
});

client.connect(err => {
  if (err) throw err;
  console.log('Connected to the PostgreSQL database');
});

// Example POST route
app.post('/data', (req, res) => {
  // Insert data logic for PostgreSQL
  res.json({ message: 'Data saved successfully' });
});

// Example GET route
app.get('/data', (req, res) => {
  // Fetch data logic from PostgreSQL
  res.json({ message: 'Fetched data successfully' });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
