/**
 * Handles displaying output to the user via the terminal.
 * @class
 */
class OutputHandler {

  /**
   * Show a single user.
   * @param {string} users - The single user.
   */
  showSingleUser(users) {
    console.table(users)
  }

    /**
     * Show the list of users.
     * @param {Array} users - The list of users to display.
     */
    showUsers(users) {
      console.table(users)
    }
  
    /**
     * Display a success message.
     * @param {string} message - The success message to display.
     */
    showSuccess(message) {
      console.log(`\n✅ ${message}`)
    }
  
    /**
     * Display an error message.
     * @param {string} message - The error message to display.
     */
    showError(message, error) {
      console.error(`\n❌ ${message}`)
      if (error) {
        console.error(`\n${error}`)
      }
    }
  }
  
  export default new OutputHandler()
  