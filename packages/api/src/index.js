const functions = require('firebase-functions')
const express = require('express')

const text_summary = require('./text_summary')

const app = express()

app.post('/text_summary', async (req, res) => {
  console.log('called')
  const summary = await text_summary(req.body.text)
  // optional call translate
  return res.status(200).send(summary)
})

// app.post('/img_desc')

app.use('*', (req, res) => {
  res.status(404).send('404 welcome to the abyss!')
})

exports.api = functions.https.onRequest(app);