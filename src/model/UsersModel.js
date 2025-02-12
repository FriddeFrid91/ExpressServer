/**
 * User model for handling user-related operations.
 */
class UsersModel {
    #users = []
  
    /**
     * Verify and convert user ID.
     * @param {string} id - The user ID as a string.
     * @returns {number} - The verified user ID as an integer.
     * @throws {Error} - Throws an error if the ID format is invalid.
     */
    verifyUserId(id) {
      const userId = parseInt(id)
      if (!Number.isInteger(userId)) {
        throw new Error('Invalid ID format')
      }
      return userId
    }
  
    /**
     * Get all users.
     * @returns {Array<Object>} - Array of all users.
     */
    getAllUsers() {
      return this.#users
    }
  
    /**
     * Create a new user.
     * @param {Object} user - The user object to be created.
     * @returns {Object} - The created user object.
     */
    createUser(user) {
      this.#users.push(user)
      return user
    }
  
    /**
     * Get a user by ID.
     * @param {number} userId - The ID of the user to retrieve.
     * @returns {Object|null} - The user object if found, otherwise null.
     */
    getUserById(userId) {
      return this.#users.find(u => u.id === userId)
    }
  
    /**
     * Update a user by ID.
     * @param {number} userId - The ID of the user to update.
     * @param {Object} userData - The new data for the user.
     * @returns {Object|null} - The updated user object if found, otherwise null.
     */
    updateUser(userId, userData) {
      const user = this.getUserById(userId)
      if (user) {
        Object.assign(user, userData)
        return user
      }
      return null
    }
  
    /**
     * Delete a user by ID.
     * @param {number} userId - The ID of the user to delete.
     * @returns {boolean} - True if the user was deleted, otherwise false.
     */
    deleteUser(userId) {
      const index = this.#users.findIndex(u => u.id === userId)
      if (index !== -1) {
        this.#users.splice(index, 1)
        return true
      }
      return false
    }
  
    /**
     * Delete all users.
     */
    deleteUsers() {
      this.#users = []
    }
  }
  
  export default new UsersModel()
  