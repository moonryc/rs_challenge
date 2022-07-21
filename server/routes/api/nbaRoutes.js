const router = require('express').Router()
const axios = require('axios').default

router.get('/teams', async (_, res) => {
  const url = 'https://www.balldontlie.io/api/v1/teams'
  try {
    const response = await axios.get(url)
    return res.json(response.data)
  } catch (error) {
    console.log(error)
    return res.sendStatus(400)
  }
})

module.exports = router
