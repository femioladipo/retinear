const functions = require('firebase-functions')
const express = require('express')

const getTextSummary = require('./text_summary')
const { getImageDescription, getImageTags } = require('./vision');
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


app.post('/img_desc', async (req, res) => {

  // const imageUrl =
  // 'https://www.w3schools.com/w3css/img_lights.jpg';
  console.log('image sent')
  const description = await getImageDescription(req.body.url);
  return res.status(200).send(description);
})

app.use('*', (req, res) => {
  res.status(404).send('404 welcome to the abyss!')
})

exports.api = functions.https.onRequest(app);