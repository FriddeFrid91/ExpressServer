// Get the client
import mysql from 'mysql2/promise'

// Create the connection to database
const connection = await mysql.createConnection({
  host: 'localhost',
  user: 'maria',
  password: 'M@ria',
  port: '3307',
  database: 'maria',
})

// A simple SELECT query
try {
  const [results, fields] = await connection.query(
    'SELECT * FROM `user` WHERE `username` = "alice"'
  )

  console.log(results) // results contains rows returned by server
  console.log(fields)  // fields contains extra meta data about results, if available
} catch (err) {
  console.log(err)
}



try {
  const [results] = await connection.query(
    'SELECT * FROM `user` WHERE `username` = ?',
    ['alice']
  );

  console.log(results);
} catch (err) {
  console.log(err);
}


// Close the database connection
await connection.end()
console.log('Database connection closed.')

