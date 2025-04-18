// routes/customer.js
const express = require('express');
const router = express.Router();
const customerModel = require('../models/customerModel');

// GET all customers
router.get('/', async (req, res) => {
  try {
    const result = await customerModel.getAllCustomers();
    res.json(result.rows);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch customers' });
  }
});

// GET customer by ID
router.get('/:id', async (req, res) => {
  try {
    const result = await customerModel.getCustomerById(req.params.id);
    if (result.rows.length > 0) {
      res.json(result.rows[0]);
    } else {
      res.status(404).json({ error: 'Customer not found' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch customer' });
  }
});

// POST - Create a new customer
router.post('/', async (req, res) => {
  try {
    const result = await customerModel.createCustomer(req.body);
    res.status(201).json(result.rows[0]);
  } catch (error) {
    res.status(500).json({ error: 'Failed to create customer' });
  }
});

// PUT - Update a customer by ID
router.put('/:id', async (req, res) => {
  try {
    const result = await customerModel.updateCustomer(req.params.id, req.body);
    res.json(result.rows[0]);
  } catch (error) {
    res.status(500).json({ error: 'Failed to update customer' });
  }
});

// DELETE - Delete a customer by ID
router.delete('/:id', async (req, res) => {
  try {
    await customerModel.deleteCustomer(req.params.id);
    res.json({ message: 'Deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to delete customer' });
  }
});

module.exports = router;
