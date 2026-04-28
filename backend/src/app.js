const express = require('express')
const cors = require('cors')
const helmet = require('helmet')
const morgan = require('morgan')
const { CLIENT_ORIGIN } = require('./config/env')
const contactRoutes = require('./routes/contactRoutes')
const errorHandler = require('./middleware/errorHandler')

const app = express()

app.use(helmet())
app.use(
  cors({
    origin: CLIENT_ORIGIN,
    credentials: false,
  })
)
app.use(express.json({ limit: '1mb' }))
app.use(morgan('dev'))

app.get('/api/health', (req, res) => {
  res.status(200).json({ status: 'ok' })
})

app.use('/api/contact', contactRoutes)
app.use(errorHandler)

module.exports = app
