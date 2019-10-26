const translate = require('@k3rn31p4nic/google-translate-api')
translate('Tu es incroyable!', { to: 'en' }).then(res => {
  console.log(res.text); 
}).catch(err => {
  console.error(err);
});
// Autocorrection
translate('Thnak you', { from: 'en', to: 'fr' }).then(res => {
  console.log(res.text); // OUTPUT: Je vous remercie
  console.log(res.from.autoCorrected); // OUTPUT: true
  console.log(res.from.text.value); // OUTPUT: [Thank] you
  console.log(res.from.text.didYouMean); // OUTPUT: false
}).catch(err => {
  console.error(err);
});