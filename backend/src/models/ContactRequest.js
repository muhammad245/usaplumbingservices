const mongoose = require('mongoose')

const contactRequestSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, trim: true, maxlength: 120 },
    phone: { type: String, required: true, trim: true, maxlength: 30 },
    service: { type: String, required: true, trim: true, maxlength: 50 },
    consent: { type: Boolean, required: true },
  },
  { timestamps: true }
)

module.exports = mongoose.model('ContactRequest', contactRequestSchema)
