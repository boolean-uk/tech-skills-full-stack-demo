const router = require('express').Router()
const client = require('../client')
const formatPlaceDataResponse = require('../formatPlaceDataResponse')
const errorCodes = require('../errorCodes')

router.get('/:placeId', async (req, res) => {
  const placeData = await client.get(req.params.placeId)
  try {
    const data = formatPlaceDataResponse(placeData)
    res.status(200).json({data})
  } catch (e) {
    const status = errorCodes[e.name]
    res.status(status).json({error: e.message})
  }
})

module.exports = router
