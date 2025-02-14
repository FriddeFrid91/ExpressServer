import db from './config/database.js';

// Connect the database and get the 'connection'
const con = await db.getConnection();

// Perform a query
const sql = 'SELECT * FROM `user`';
const args = [];
const [results] = await con.query(sql, args);

// Print the resultset
console.table(results);

// Close the database connection
await db.close();

