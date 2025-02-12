import { app } from '../../src/express.js' 
import { expect } from 'chai';
import supertest from 'supertest'

const request = supertest(app)

describe('Express Hello Routes', () => {
  it('should return "Hello World" for GET /', async () => {
    const res = await request.get('/')
    expect(res.status).to.equal(200)
    expect(res.text).to.contain('Hello World')
  })
})

it('should return 404 for non-existent route', async () => {
    const res = await request.get('/not-found')
    expect(res.status).to.equal(404)
    expect(res.body).to.have.property('status')
    expect(res.body.status).to.equal(404)
  })

  it('should return 500 for non-existent route', async () => {
    const res = await request.get('/not-found')
    expect(res.status).to.equal(500)
    expect(res.body).to.have.property('status')
    expect(res.body.status).to.equal(500)
  })
