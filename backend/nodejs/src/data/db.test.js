// src/data/db.test.js
import { pool } from './db.js';

async function testDB() {
  const [rows] = await pool.query('SELECT 1 + 1 AS result');
  console.log(rows);
  process.exit(0);
}

testDB().catch(err => {
  console.error('DB connection failed:', err);
  process.exit(1);
});
