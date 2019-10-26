const deepai = require('deepai'); 

deepai.setApiKey('quickstart-QUdJIGlzIGNvbWluZy4uLi4K');

(async function() {
    var resp = await deepai.callStandardApi("summarization", {
            text: "WeWork’s 220,000 square feet of space at Dock 72, about a third of the building, is far from full. The common area, offering spectacular views of Manhattan, was bustling on the day of the ribbon cutting. But it was sparsely used in the days before and after. Some firms are moving in, but most of the private offices that WeWork aims to rent out to businesses were vacant on Thursday. WeWork said the space was over 30 percent occupied, roughly the industry standard for openings.",
    });
    console.log(resp);
})()
