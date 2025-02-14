import databaseService from "../service/DatabaseService.js";

class UsersModel {

  static async getSingleUser(id) {
    if (!id) {
        console.error("Error: getSingleUser called without an ID:")
        return null;
    }
    const query = "SELECT * FROM user WHERE id = ?";
    console.log("🔹 Debug: Running SQL Query:", query, "with params:", [id]); // Debug-logg
    const result = await databaseService.query(query, [id])
    const users = await databaseService.query(query, [id]);
    return result.length > 0 ? users[0] : null;
  }

    static async getAllUsers() {
        const query = "SELECT * FROM user";
        return await databaseService.query(query);
    }

    static async addUser(name, email, password) {
        const query = "INSERT INTO user (username, email, password) VALUES (?, ?, ?)";
        const result = await databaseService.query(query, [name, email, password]);
        return result.insertId;
    }

    static async updateUser(id, name, email) {
        const query = "UPDATE user SET username = ?, email = ? WHERE id = ?";
        const result = await databaseService.query(query, [name, email, id]);
        return result.affectedRows > 0;
    }

    static async deleteUser(id) {
        const query = "DELETE FROM user WHERE id = ?";
        const result = await databaseService.query(query, [id]);
        return result.affectedRows > 0;
    }
}

export default UsersModel; // ✅ Se till att vi exporterar klassen korrekt



  