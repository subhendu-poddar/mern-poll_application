const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const cors = require('cors')
const dotenv = require('dotenv')
const routes = require('./routes')
const handle = require('./handlers')
const db = require('./models')

dotenv.config()
const app = express()
const PORT = process.env.PORT || 8000


app.use(express.json())
app.use(cors())
app.use('/api/auth', routes.auth)
app.use('/api/polls', routes.poll)


app.use(handle.errors)
app.use(handle.notFound)


app.listen(PORT, console.log(`server is running at ${PORT}`))
