import mysql from 'mysql2/promise';

const connection = await mysql.createConnection({
    host: 'localhost',
    user: 'maria',
    port: '3307',
    password: 'M@ria', // Empty password for testing
  });
  
  console.log('Connected successfully!');
  await connection.end();
  
  