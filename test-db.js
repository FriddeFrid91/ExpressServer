import mysql from 'mysql2/promise';

(async () => {
  try {
    const connection = await mysql.createConnection({
      host: 'localhost',
      user: 'maria',
      password: 'M\\@ria', // Ensure this is correct
    });

    console.log('Connected successfully!');
    await connection.end();
  } catch (err) {
    console.error('Connection failed:', err.message);
  }
})();
