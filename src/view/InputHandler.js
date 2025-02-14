import readline from "readline/promises"
import { stdin as input, stdout as output } from "process"

/**
 * Handles user input in the terminal.
 * @class
 */
class InputHandler {
  /**
   * Ask a question to the user and return the response.
   * @async
   * @param {string} question - The question to ask.
   * @returns {Promise<string>} The user's input.
   */
  async ask(question) {
    const rl = readline.createInterface({ input, output })
    const answer = await rl.question(question)
    rl.close()
    return answer
  }
}

export default new InputHandler()

