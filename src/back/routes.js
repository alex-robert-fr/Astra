const express = require("express")
const path = require("path")

const app = express()

app.get("/", (_req, res) => {
  res.status(200).sendFile(path.join(__dirname, "../front/index.html"))
})

module.exports = app
