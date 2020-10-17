const express = require("express")
const app = express()


const gamesdoexercicio = require("./routes/gamesRoutes.js")


app.use(express.json())
app.use('/', router)

module.exports = app