const express = require('express')
const { body } = require('express-validator')
const { createContactRequest } = require('../controllers/contactController')
const validateRequest = require('../middleware/validateRequest')

const router = express.Router()

router.post(
  '/',
  [
    body('name').trim().isLength({ min: 2, max: 120 }),
    body('phone').trim().isLength({ min: 8, max: 30 }),
    body('service').trim().isLength({ min: 1, max: 50 }),
    body('consent').isBoolean().custom((value) => value === true),
  ],
  validateRequest,
  createContactRequest
)

module.exports = router
