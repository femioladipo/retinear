const request = require('request');

/**
 * Set up the env variables
 */
const key = '3a37493d505949ea920dc5f9b57be4ac';
const endpoint = 'https://westcentralus.api.cognitive.microsoft.com/vision/v2.1';
if (!key) { throw new Error('Set your environment variables for your subscription key and endpoint.'); }


/**
 * Send the image to the API for analysis
 * @param {*} imageUrl the url of the image
 */
function analyseImage(imageUrl) {
    const uriBase = endpoint + '/describe';

    const params = {
        'language': 'en',
        'maxCandidates': 5
    };

    const options = {
        uri: uriBase,
        qs: params,
        body: '{"url": ' + '"' + imageUrl + '"}',
        headers: {
            'Content-Type': 'application/json',
            'Ocp-Apim-Subscription-Key': key
        }
    };

    // console.log("[*] Analysing the image...");
    return new Promise((resolve, reject) => {
        request.post(options, (error, response, body) => {
            if (error) {
                console.log('Error analysing the image: ', error);
                resolve({});
            }

            const jsonResponse = JSON.parse(body);
            resolve(jsonResponse);
        });
    });
}


/**
 * Sort by the 'confidence field' and return the first object
 * @param {*} captions list of possible descriptions
 */
function bestCandidate(captions) {
    if (captions.length === 0) return '';

    Object.keys(captions).sort((a, b) => a['confidence'] - b['confidence']);
    return captions[0]['text'];
}


/**
 * Given an image, analyse it and return the best description
 */
const getImageDescription = async (imageUrl) => {
    try {
        const { description: { captions = [] } } = await analyseImage(imageUrl);
        const bestDescription = bestCandidate(captions);

        return bestDescription;
    } catch (err) {
        return '';
    }

}


/**
 * Given an image, analyse it and return all the tags associated with it
 */
const getImageTags = async (imageUrl) => {
    const { description: { tags = [] } } = await analyseImage(imageUrl);

    return tags;
}


module.exports = { getImageDescription, getImageTags };