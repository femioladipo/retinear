const puppeteer = require('puppeteer');

const scrapper = async (url) => {
    /* Initiate the Puppeteer browser */
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    /* Go to the IMDB Movie page and wait for it to load */
    await page.goto(url, { waitUntil: 'networkidle0' });
    /* Run javascript inside of the page */
    let data = await page.evaluate(() => {
        let title = document.querySelector('h1').innerText;
        let img_urls = Array.from(document.querySelectorAll('img')).map(i => i.src); //waits to receive url images
        let textf = Array.from(document.querySelectorAll('p')); //waits to receive url images
        let leng = textf.length;
        let textFiltered = [];
        for(let i=Math.floor(leng*0.15);i<Math.floor(leng*0.8); i++){
            textFiltered.push(textf[i]);
        }
        let text = textFiltered.map(p => p.innerText).join(", ");
        /* Returning an object filled with the scraped data */
        return {
            webSiteName: "",
            title,
            img_urls,
            text
        }

    });
    await browser.close();

    return data
};

module.exports = exports = scrapper

