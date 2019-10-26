const functions = require('firebase-functions')
const express = require('express')

const getTextSummary = require('./text_summary')
const readingTime = require('./length')

const app = express()

const constructFinalStatement = (websiteName, timeToRead, imageCaptions, textSummary) => `
  You are visiting a page by ${websiteName}. 
  It will take ${timeToRead} minutes to read.
  It contains ${imageCaptions.length} images on with themes, ${imageCaptions.slice(2).join(',')}
  Finally, the page is about: ${textSummary},
`

app.post('/', async (req, res) => {
  const { websiteName, text, img_urls } = req.body
  const textSummary = await getTextSummary(text).then(({ output }) => output)
  const timeToRead = readingTime(text)
  // const imageCaptions = img_desc(img_urls)
  return res.send(constructFinalStatement(websiteName, timeToRead, [], textSummary))
})

app.use('*', (req, res) => {
  res.status(404).send('404 welcome to the abyss!')
})

exports.api = functions.https.onRequest(app);