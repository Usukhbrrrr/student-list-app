const express = require('express');
const cors = require('cors');
const { Pool } = require('pg');

const app = express();
const port = 5000;

app.use(cors());

const pool = new Pool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  port: 5432
});

app.get('/', (req, res) => {
  res.send('Student Backend ажиллаж байна');
});

app.get('/students', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM students ORDER BY id');
    res.json(result.rows);
  } catch (error) {
    res.status(500).json({ error: 'Database query алдаа гарлаа' });
  }
});

app.listen(port, '0.0.0.0', () => {
  console.log(`Backend ${port} порт дээр ажиллаж байна`);
});