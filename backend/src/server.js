const app = require('./app')
const connectDB = require('./config/db')
const { PORT } = require('./config/env')

async function startServer() {
  try {
    await connectDB()
    app.listen(PORT, () => {
      // eslint-disable-next-line no-console
      console.log(`Server running on port ${PORT}`)
    })
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error('Failed to start server:', error)
    process.exit(1)
  }
}

startServer()
