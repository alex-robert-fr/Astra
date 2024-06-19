const app = require("../routes.js")
const request = require("supertest")

describe("Test the root path", () => {
  test("Return status 200", () => {
    request(app)
      .get("/")
      .then(res => {
        expect(res.statusCode).toBe(200)
      })
  })
})
