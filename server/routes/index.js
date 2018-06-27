const express = require('express')
const router = express.Router()
const axios = require('axios')


/*** ENDPOINTS ***/

/* FIND SUMMONER */
router.post('/summonerName', (req, res) => {
  const { user } = req.body
  axios.get(`https://na1.api.riotgames.com/lol/summoner/v3/summoners/by-name/${user}/?api_key=RGAPI-e787d01c-fa81-4d3b-b34d-8f26a7a9cdea`)
    .then((response) => {
      res.send(response.data)
    })
    .catch((err) => {
      console.log(err)
    })
})

/*  GET SUMMONER INFO */
router.get('/summoner/:id', (req, res) => {
  const { id } = req.params
  axios.get(`https://na1.api.riotgames.com/lol/summoner/v3/summoners/by-account/${id}/?api_key=RGAPI-e787d01c-fa81-4d3b-b34d-8f26a7a9cdea`)
    .then((response) => {
      res.send(response.data)
    })
    .catch((err) => {
      console.log(err)
    })
})

/* GET USER LATEST MATCHES */
router.post('/summonerMatches', ( req, res) => {
  const { id } = req.body
  axios.get(`https://na1.api.riotgames.com/lol/match/v3/matchlists/by-account/${id}/?api_key=RGAPI-e787d01c-fa81-4d3b-b34d-8f26a7a9cdea`)
    .then((response) => {
      res.send(response.data)
    })
    .catch((err) => {
      console.log(err)
    })
})

/* GET MATCH DETAILS */
router.post('/matchDetails', (req, res) => {
  console.log(req.body)
})


module.exports = router