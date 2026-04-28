const mongoose = require('mongoose')
const ContactRequest = require('../models/ContactRequest')

async function createContactRequest(req, res, next) {
  try {
    const payload = {
      name: req.body.name,
      phone: req.body.phone,
      service: req.body.service,
      consent: req.body.consent,
    }

    if (mongoose.connection.readyState === 1) {
      await ContactRequest.create(payload)
    }

    return res.status(201).json({
      message: 'Contact request submitted successfully.',
    })
  } catch (error) {
    return next(error)
  }
}

module.exports = {
  createContactRequest,
}
