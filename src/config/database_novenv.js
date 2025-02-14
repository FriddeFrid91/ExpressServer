/**
 * A centralized module for managing a single MySQL database connection.
 * Provides methods to initialize, retrieve, and close the connection.
 */
import mysql from 'mysql2/promise'

let connection = null // Store the connection instance

/**
 * Initializes the database connection if not already initialized.
 * @returns {Promise<mysql.Connection>} The active database connection.
 */
const initializeConnection = async () => {
  if (!connection) {
    connection = await mysql.createConnection({
      host: 'localhost',
      user: 'maria',
      password: 'M@ria',
      database: 'maria',
    })
    console.log('Database connected.')
  }
  return connection
}

/**
 * Retrieves the active database connection. If not initialized, it will call `initializeConnection`.
 * @returns {Promise<mysql.Connection>} The active database connection.
 */
const getConnection = async () => {
  if (!connection) {
    await initializeConnection()
  }
  return connection
}

/**
 * Closes the database connection if it exists and resets the connection instance to `null`.
 * @returns {Promise<void>}
 */
const closeConnection = async () => {
  if (connection) {
    await connection.end()
    connection = null
    console.log('Database connection closed.')
  }
}

/**
 * The exported `db` object, containing methods to manage the database connection.
 * @property {Function} initialize - Initializes the database connection.
 * @property {Function} getConnection - Retrieves the active database connection.
 * @property {Function} close - Closes the active database connection.
 */
const db = {
  initialize: initializeConnection,
  getConnection,
  close: closeConnection,
}

export default db
