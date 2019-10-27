const deepai = require('deepai')

deepai.setApiKey('39e27714-1147-47a1-b260-22228b29c235')

const computerVision = async function (image) {
  return deepai.callStandardApi('neuraltalk', { image }).then(({ output }) => output)
}

module.exports = exports = computerVision