const deepai = require('deepai')

deepai.setApiKey('39e27714-1147-47a1-b260-22228b29c235')

const text_summary = async function (text) {
    return deepai.callStandardApi("summarization", { text })
}
module.exports = exports = text_summary


