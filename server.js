const express = require('express');
const mysql = require('mysql2');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

// MySQL connection
const db = mysql.createConnection({
  host: 'localhost',  // this will change for production
  user: 'your_mysql_user',
  password: 'your_mysql_password',
  database: 'your_database_name'
});

db.connect((err) => {
  if (err) {
    console.error('error connecting: ' + err.stack);
    return;
  }
  console.log('connected to MySQL as id ' + db.threadId);
});

// Define POST request
app.post('/api/data', (req, res) => {
  const { data } = req.body;
  const query = 'INSERT INTO your_table (data_column) VALUES (?)';
  db.query(query, [data], (err, result) => {
    if (err) throw err;
    res.send({ message: 'Data inserted successfully!' });
  });
});

// Define GET request
app.get('/api/data', (req, res) => {
  db.query('SELECT * FROM your_table', (err, result) => {
    if (err) throw err;
    res.send(result);
  });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
