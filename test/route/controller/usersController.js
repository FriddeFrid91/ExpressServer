import { expect } from 'chai'
import UsersModel from '../../src/model/UsersModel.js'
import { controller } from '../../src/controller/usersController.js'

describe('UserController', () => {
  let req, res

  beforeEach(() => {
    req = {}
    res = {
      json: (data) => res.body = data,
      status: (code) => {
        res.statusCode = code
        return res
      },
    }
    UsersModel.deleteUsers()
  })

  describe('getUsers', () => {
    it('should get all users', () => {
      controller.getUsers(req, res)
      expect(res.body).to.be.an('array').that.is.empty
    })
  })

  describe('createUser', () => {
    it('should create a new user', () => {
      req.body = { id: 1, name: 'John Doe' }
      controller.createUser(req, res)
      expect(res.statusCode).to.equal(201)
      expect(res.body).to.have.property('id', 1)
      expect(res.body).to.have.property('name', 'John Doe')
    })
  })
})
