const express = require("express")
const path = require("path")

const app = express()
const port = 3000

app.get("/", (_req, res) => {
  res.sendFile(path.join(__dirname, "src/front/index.html"))
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
