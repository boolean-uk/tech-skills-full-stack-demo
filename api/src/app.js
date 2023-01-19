require('dotenv').config()

const express = require("express")
const morgan = require("morgan")
const cors = require("cors")

const app = express()

app.use(morgan("dev"))
app.use(cors()) // specify allowed domains
app.use(express.json())

const placesRouter = require('./routers/placesRouter')

app.use('/places', placesRouter)

module.exports = app
