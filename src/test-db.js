import db from './config/database.js';

const testConnection = async () => {
  try {
    const connection = await db.getConnection();
    console.log('✅ Database connected successfully!');

    // Se till att anslutningen bara stängs en gång
    if (connection && connection.state !== 'disconnected') {
      await db.close();
      console.log('Database connection closed.');
    }

  } catch (error) {
    console.error('❌ Database Connection Error:', error);
  }
};

testConnection();
