import mysql from 'mysql2/promise';

// create the connection to database
const connection = await mysql.createConnection({
  host: 'localhost',
  user: 'maria',
  port: '3007',
  password: 'M@ria',
  database: 'maria',
});

try {
  // execute will internally call prepare and query
  const sql = 'SELECT * FROM `user` WHERE `username` = ?'
  const args = ['alice']
  const [results] = await connection.execute(sql, args)

  // results contains rows returned by server
  console.log(results); 
} catch (err) {
  console.log(err);
}

// Close the database connection
await connection.end();
console.log('Database connection closed.');
