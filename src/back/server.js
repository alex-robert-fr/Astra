const app = require("./routes")
const port = 3000

app.listen(port, () => {
  console.log(`http://127.0.0.1:${port}`)
})
