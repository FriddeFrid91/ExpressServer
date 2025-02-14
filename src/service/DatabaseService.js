import { config } from "../config/database.js"; // ✅ Importerar "config"
import mysql from 'mysql2/promise';

class DatabaseService {
    static connection = null;

    // 🔹 Anslut till databasen om den inte redan är ansluten
    static async connect() {
        if (!this.connection) {
            try {
                this.connection = await mysql.createConnection(config);
                console.log("✅ Database connected successfully!");
            } catch (error) {
                console.error("❌ Database Connection Error:", error);
            }
        }
        return this.connection;
    }

    // 🔹 Exekvera SQL-frågor
    static async query(sql, params = []) {
        try {
            const connection = await this.connect();
            console.log(`🔹 Debug: Running SQL Query: ${sql} with params:`, params);
            const [rows] = await connection.execute(sql, params);
            console.log("🔹 Debug: SQL Query Result =>", rows);
            return rows;
        } catch (error) {
            console.error("❌ SQL Query Error:", error);
            return [];
        }
    }
}

export default DatabaseService;


