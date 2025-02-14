import mysql from 'mysql2/promise';

// Logga ut ENV-variabler (TEMPORÄRT FÖR DEBUGGING)
/*console.log("Loaded ENV variables:", {
    DB_HOST: process.env.DB_HOST,
    DB_USER: process.env.DB_USER,
    DB_PASSWORD: process.env.DB_PASSWORD,
    DB_SCHEMA: process.env.DB_SCHEMA,
    DB_PORT: process.env.DB_PORT
});*/

export const config = {
    host: process.env.DB_HOST || 'localhost',
    user: process.env.DB_USER || 'root',
    password: process.env.DB_PASSWORD || '',
    database: process.env.DB_SCHEMA || 'test',
    port: process.env.DB_PORT || 3306
};

const pool = mysql.createPool(config);

export default pool;



