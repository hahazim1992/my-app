// models/customerModel.js
const db = require('../db');

const getAllCustomers = () => db.query('SELECT * FROM customer');
const getCustomerById = (id) => db.query('SELECT * FROM customer WHERE id = $1', [id]);
const createCustomer = (data) => db.query('INSERT INTO customer (name, gender, dob) VALUES ($1, $2, $3) RETURNING *', [data.name, data.gender, data.dob]);
const updateCustomer = (id, data) => db.query('UPDATE customer SET name=$1, gender=$2, dob=$3 WHERE id=$4 RETURNING *', [data.name, data.gender, data.dob, id]);
const deleteCustomer = (id) => db.query('DELETE FROM customer WHERE id=$1', [id]);

module.exports = {
  getAllCustomers,
  getCustomerById,
  createCustomer,
  updateCustomer,
  deleteCustomer
};
