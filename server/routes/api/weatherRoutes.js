const router = require('express').Router()
const axios = require('axios').default

router.get('/city/:id', async (req, res) => {
  const city = req.params.id
  const url = `http://api.weatherapi.com/v1/current.json?key=${process.env.WEATHER_API_KEY}&q=${city}`
  try {
    const response = await axios.get(url)
    return res.json(response.data)
  } catch (error) {
    console.log(error)
    return res.sendStatus(400)
  }
})

module.exports = router
