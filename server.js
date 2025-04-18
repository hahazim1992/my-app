const express = require('express');
const cors = require('cors');
const customerRoutes = require('./routes/customer');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

// Allow only your frontend domain
const corsOptions = {
  origin: 'https://todolist-two.onrender.com',
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  credentials: true,
};

app.use(cors(corsOptions));
app.use(express.json());

// Routes
app.use('/customer', customerRoutes);

// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
