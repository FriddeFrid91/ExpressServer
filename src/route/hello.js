import express from 'express'
import http from 'http'

export const router = express.Router()

router.get('/hello', (req, res) => {
  res.send('Hello World!')
})

router.get('/500', (req, res, next) => {
  const err = new Error(http.STATUS_CODES[500] || 'Internal Server Error')
  err.status = 500
  next(err)
})

router.get('/api/hello', (req, res) => {
  const json = {
    "message": "Hello World!"
  }
  res.json(json)
})
