const supertest = require("supertest")
const fs = require('fs')
const validResponse = require('../../fixtures/places/validResponse.json')
const placeNotFoundResponse = fs.readFileSync('./test/fixtures/places/placeNotFoundResponse.txt', { encoding:'utf8' }).trim()
const mockFetchReturnValue = require('../../helpers/mockFetch')

let app

describe("Places Endpoint", () => {
  beforeEach(() => {
    app = require("../../../src/app.js")
  })

  afterEach(() => {
    global.fetch.mockClear()
  })

  describe("GET /places", () => {
    it("Retrieve places data", async () => {
      mockFetchReturnValue({
        contentType: 'application/json',
        data: validResponse,
      })

      const response = await supertest(app).get(`/places/GXvPAor1ifNfpF0U5PTG0w`)

      expect(response.status).toEqual(200)
      expect(response.body.data.name).toEqual("Ed's Diner")
      expect(response.body.data.address).toEqual("His fancy kitchen!")
      expect(response.body.data.openingHours).not.toEqual(undefined)
    })

    it("returns error for non existent place", async () => {
      mockFetchReturnValue({
        contentType: 'application/text',
        data: placeNotFoundResponse
      })

      const response = await supertest(app).get(`/places/does-not-exist`)

      expect(response.status).toEqual(404)
      expect(response.body.error).toEqual("<?xml version='1.0' encoding='UTF-8'?><Error><Code>NoSuchKey</Code><Message>The specified key does not exist.</Message><Details>No such object: coding-session-rest-api/does-not-exist</Details></Error>")
    })
  })
})
