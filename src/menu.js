import userController from "./controller/UsersController.js"
import inputHandler from "./view/InputHandler.js"

/**
 * Class to handle the menu and user interactions.
 * Acts like a router to direct user actions.
 * @class
 */
class Menu {
  /**
   * Show the menu to the user.
   */
  show() {
    console.log("\n--- Main Menu ---")
    console.log("1. Show users")
    console.log("2. Add user")
    console.log("3. Update user")
    console.log("4. Delete user")
    console.log("5. View single user")
    console.log("6. Exit")
  }

  /**
   * Handle user input and route to the appropriate controller method.
   * @async
   */
  async handleInput() {
    const userInput = await inputHandler.ask("Select an option: ")

    switch (userInput) {
    case "1":
      await userController.showUsers()
      break

    case "2":
      const nameToAdd = await inputHandler.ask("Enter username: ")
      const emailToAdd = await inputHandler.ask("Enter email: ")
      const passwordToAdd = await inputHandler.ask("Enter password: ")
      await userController.addUser(nameToAdd, emailToAdd, passwordToAdd)
      break

    case "3":
      const idToUpdate = parseInt(
        await inputHandler.ask("Enter ID to update: "),
        10
      )
      const newName = await inputHandler.ask("Enter new name: ")
      const newEmail = await inputHandler.ask("Enter new email: ")
      await userController.updateUser(idToUpdate, newName, newEmail)
      break

    case "4":
      const idToDelete = parseInt(
        await inputHandler.ask("Enter ID to delete: "),
        10
      )
      await userController.deleteUser(idToDelete)
      break

      case "5": 
    const singleUserToView = parseInt(
        await inputHandler.ask("Enter single user to view: "), 
        10
    );

    console.log("🔹 Debug: User ID entered:", singleUserToView); // 🔹 Debug-logg

    if (isNaN(singleUserToView)) {
        console.log("❌ Invalid ID. Please enter a valid number.");
    } else {
        await userController.showSingleUser(singleUserToView); // 🔹 Se till att rätt ID skickas
    }
    break;


    case "6":
      console.log("Exiting the application...")
      return false
      break

    default:
      console.log("Invalid option. Please try again.")
    }
    return true
  }
}

export default new Menu()
