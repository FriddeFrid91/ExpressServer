import db from './config/database.js'

// Connect the database and get the 'connection'
const con = await db.getConnection()

// Perform a query to get ALL users
const sql = 'SELECT * FROM `user`'
const [results] = await con.query(sql)

// Print all users
console.table(results.map(user => ({
  id: user.id,
  username: user.username,
  email: user.email,
  created_at: user.created_at.toISOString(),
  updated_at: user.updated_at.toISOString()
})))

await db.close()
console.log('Database connection closed.')

