import 'dotenv/config'; // ✅ Laddar .env automatiskt
import databaseService from "./src/service/DatabaseService.js"
import menu from "./src/Menu.js"


// Connect to the database
await databaseService.connect()

// Do the menu loop
do {
  menu.show()
} while (await menu.handleInput())

// End the application
await databaseService.closeConnection()
process.exit(0)

