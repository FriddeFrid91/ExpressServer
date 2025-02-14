import usersModel from "../model/UsersModel.js"
import outputHandler from "../view/OutputHandler.js"

/**
 * Controller to perform CRUD fo rhte users collection.
 * @class
 */
class UsersController {
/**Show a single user. */
/* @async
*/
async showSingleUser(id) {
  try {
    const user = await usersModel.getSingleUser(id);
    if (user) {
      outputHandler.showUsers([user]);
    } else {
      outputHandler.showError(`❌ No user found with ID: ${id}`);
    }
  }
    catch (error) {
      outputHandler.showError("❌ Could not fetch user.", error);
    }
  }


  /**
   * Show all users by fetching data from the model and displaying it via the output handler.
   * @async
   */
  async showUsers() {
    try {
      const users = await usersModel.getAllUsers()
      outputHandler.showUsers(users)
    } catch (error) {
      outputHandler.showError("Could not fetch users.")
    }
  }

  /**
   * Add a new user to the database.
   * @async
   * @param {string} name - The name of the user.
   * @param {string} email - The email of the user.
   * @param {string} password - The password for the user.
   */
  async addUser(name, email, password) {
    try {
      const id = await usersModel.addUser(name, email, password)
      outputHandler.showSuccess(`New user added with ID: ${id}`)
    } catch (error) {
      outputHandler.showError("Could not add user.", error)
    }
  }

  /**
   * Update an existing user in the database.
   * @async
   * @param {number} id - The ID of the user to update.
   * @param {string} name - The new name of the user.
   * @param {string} email - The new email of the user.
   */
  async updateUser(id, name, email) {
    try {
      const success = await usersModel.updateUser(id, name, email)
      if (success) {
        outputHandler.showSuccess(`User with ID ${id} updated.`)
      } else {
        outputHandler.showError(`No user found with ID ${id}.`)
      }
    } catch (error) {
      outputHandler.showError("Could not update user.", error)
    }
  }

  /**
   * Delete a user from the database.
   * @async
   * @param {number} id - The ID of the user to delete.
   */
  async deleteUser(id) {
    try {
      const success = await usersModel.deleteUser(id)
      if (success) {
        outputHandler.showSuccess(`User with ID ${id} deleted.`)
      } else {
        outputHandler.showError(`No user found with ID ${id}.`)
      }
    } catch (error) {
      outputHandler.showError("Could not delete user.", error)
    }
  }
}

export default new UsersController()
