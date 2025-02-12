import { router as helloRoute } from './hello.js';
import { controller } from '../controller/usersController.js';
import express from 'express'
import { router as usersRoute } from './users.js'

export const router = express.Router()
router.use('/api/v1', usersRoute)
router.use('/', helloRoute)

router.param('id', controller.verifyUserId)

router.get('/users', controller.getUsers)
router.post('/users', controller.createUser)
router.get('/users/:id', controller.getUserById)
router.put('/users/:id', controller.updateUser)
router.patch('/users/:id', controller.partialUpdateUser)
router.delete('/users', controller.deleteUsers)
router.delete('/users/:id', controller.deleteUser)


