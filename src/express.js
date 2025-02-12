import express from 'express'
import { router } from './route/index.js'
import logger from 'morgan'
import { errorHandler } from './middleware/errorHandler.js'


export const app = express()

// Use the public folder for static resources
app.use(express.static('public'))

// Middleware to parse JSON data as part of the body
app.use(express.json())


app.use(logger('dev', { immediate: true}))

app.use('/', router)

app.use('/hello', (req, res) => {
  res.send('Hello World!')
})

app.use('/api/hello', (req, res) => {
  const json = {
    "message": "Hello World!"
  }
  res.json(json)
})

// 404 handler
app.use(errorHandler.notFoundDefault)

// Global error handler
app.use(errorHandler.errorDefault)


  
  
