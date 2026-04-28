const mongoose = require('mongoose')
const { MONGODB_URI } = require('./env')

async function connectDB() {
  if (!MONGODB_URI) {
    // Keep app functional in local mode if DB is not configured yet.
    return
  }

  await mongoose.connect(MONGODB_URI)
}

module.exports = connectDB
