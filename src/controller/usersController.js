let users = []

/**
 * Controller object for handling user-related operations.
 */
export const controller = {}

/**
 * Middleware to verify the user ID.
 * @param {Request} req - The request object.
 * @param {Response} res - The response object.
 * @param {function} next - The next middleware function.
 * @param {number} id - The user ID.
 */
controller.verifyUserId = (req, res, next, id) => {
  const userId = parseInt(id)
  if (!Number.isInteger(userId)) {
    return res.status(400).json({ error: 'Invalid ID format' })
  }
  req.userId = userId
  next()
}

/**
 * Get all users.
 * @param {Request} req - The request object.
 * @param {Response} res - The response object.
 */
controller.getUsers = (req, res) => {
  res.json(users)
}

/**
 * Create a new user.
 * @param {Request} req - The request object.
 * @param {Response} res - The response object.
 */
controller.createUser = (req, res) => {
  const user = req.body
  // Validering av användardata kan läggas till här
  users.push(user)
  res.status(201).json(user)
}

/**
 * Get a user by ID.
 * @param {Request} req - The request object.
 * @param {Response} res - The response object.
 */
controller.getUserById = (req, res) => {
  const user = users.find(u => u.id === req.userId)
  if (user) {
    res.json(user)
  } else {
    res.status(404).json({ error: 'User not found' })
  }
}

/**
 * Update a user by ID.
 * @param {Request} req - The request object.
 * @param {Response} res - The response object.
 */
controller.updateUser = (req, res) => {
  const user = users.find(u => u.id === req.userId)
  if (user) {
    Object.assign(user, req.body)
    res.json(user)
  } else {
    res.status(404).json({ error: 'User not found' })
  }
}

/**
 * Partially update a user by ID.
 * @param {Request} req - The request object.
 * @param {Response} res - The response object.
 */
controller.partialUpdateUser = (req, res) => {
  const user = users.find(u => u.id === req.userId)
  if (user) {
    Object.assign(user, req.body)
    res.json(user)
  } else {
    res.status(404).json({ error: 'User not found' })
  }
}

/**
 * Delete a user by ID.
 * @param {Request} req - The request object.
 * @param {Response} res - The response object.
 */
controller.deleteUser = (req, res) => {
  const index = users.findIndex(u => u.id === req.userId)
  if (index !== -1) {
    users.splice(index, 1)
    res.json({ result: 'User deleted' })
  } else {
    res.status(404).json({ error: 'User not found' })
  }
}

/**
 * Delete the users collection.
 * @param {Request} req - The request object.
 * @param {Response} res - The response object.
 */
controller.deleteUsers = (req, res) => {
  users = []
  res.json({ result: 'Users deleted' })
}
