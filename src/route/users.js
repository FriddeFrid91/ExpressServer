import express from 'express'
import { controller } from '../controller/usersController.js'

export const router = express.Router()

router.param('id', controller.verifyUserId)

router.get('/users', controller.getUsers)
router.post('/users', controller.createUser)
router.get('/users/:id', controller.getUserById)
router.put('/users/:id', controller.updateUser)
router.patch('/users/:id', controller.partialUpdateUser)
router.delete('/users', controller.deleteUsers)
router.delete('/users/:id', controller.deleteUser)
