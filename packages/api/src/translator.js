const googleTranslate = require('google-translate')

const apiKey = 'AIzaSyAs5ydyg60fHdgXXinZOzlQ_2Jv85oRUlI'

const translate = googleTranslate(apiKey).translate

const translator = (text, targetLang) => {
  return new Promise((resolve, reject) => {
    translate(text, 'en', targetLang, (err, translations) => {
      if (err) reject(err)
      resolve(translations)
    })
  })
}

module.exports = exports = translator

// // Autocorrection
// googleTranslate.translate('Thnak you', { from: 'en', to: 'fr' }).then(res => {
//   console.log(res.text); // OUTPUT: Je vous remercie
//   console.log(res.from.autoCorrected); // OUTPUT: true
//   console.log(res.from.text.value); // OUTPUT: [Thank] you
//   console.log(res.from.text.didYouMean); // OUTPUT: false
// }).catch(err => {
//   console.error(err);
// });
