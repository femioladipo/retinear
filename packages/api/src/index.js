const functions = require('firebase-functions')
const express = require('express')

const getSiteJSON = require('./scraper')
const getTextSummary = require('./text_summary')
const { getImageDescription, getImageTags } = require('./vision');
const readingTime = require('./length')

const app = express()

const constructFinalStatement = (websiteName, timeToRead, imageCaptions, textSummary) => `
  You are visiting a page by ${websiteName}. 
  It will take ${timeToRead} minutes to read.
  It contains ${imageCaptions.length} images on with themes, ${imageCaptions.filter(caption => caption !== '').slice(2).join(', ')}
  Finally, the page is about: ${textSummary},
`

app.post('/', async (req, res) => {
  const data = await getSiteJSON(req.body.url)
  const { websiteName, title, text, img_urls } = data
  const textSummary = await getTextSummary(text).then(({ output }) => output)
  const timeToRead = readingTime(text)
  const imageCaptions = await Promise.all(img_urls.map(img_url => getImageDescription(img_url)))
  return res.send(constructFinalStatement(websiteName, timeToRead, imageCaptions, textSummary))
})

app.use('*', (req, res) => {
  res.status(404).send('404 welcome to the abyss!')
})

exports.api = functions.runWith({ memory: '2GB' }).https.onRequest(app);