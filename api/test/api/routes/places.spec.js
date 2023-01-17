const supertest = require("supertest")
let app

describe("Places Endpoint", () => {
  beforeEach(() => {
    app = require("../../../src/app.js")
  })
  describe("GET /places", () => {
    it("Retrieve places data", async () => {
      const response = await supertest(app).get(`/places/GXvPAor1ifNfpF0U5PTG0w`)

      expect(response.status).toEqual(200)
      expect(response.body.data.name).toEqual("Casa Ferlin")
      expect(response.body.data.address).toEqual("Stampfenbachstrasse 38, 8006 Zürich")
      expect(response.body.data.openingHours).not.toEqual(undefined)
    })

    it("Retrieve places data", async () => {
      const response = await supertest(app).get(`/places/ohGSnJtMIC5nPfYRi_HTAg`)

      expect(response.status).toEqual(200)
      expect(response.body.data.name).toEqual("Le Café du Marché")
      expect(response.body.data.address).toEqual("Rue de Conthey 17, 1950 Sion")
      expect(response.body.data.openingHours).not.toEqual(undefined)
    })

    it("returns error for non existent place", async () => {
      const response = await supertest(app).get(`/places/does-not-exist`)

      expect(response.status).toEqual(404)
      expect(response.body.error).toEqual("<?xml version='1.0' encoding='UTF-8'?><Error><Code>NoSuchKey</Code><Message>The specified key does not exist.</Message><Details>No such object: coding-session-rest-api/does-not-exist</Details></Error>")
    })
  })
})
