const puppeteer = require('puppeteer');

const scrapper = async (url) => {
    /* Initiate the Puppeteer browser */
    const browser = await puppeteer.launch({ args: ['--no-sandbox', '--disable-setuid-sandbox'] });
    const page = await browser.newPage();
    /* Go to the IMDB Movie page and wait for it to load */
    await page.goto(url, { waitUntil: 'networkidle0' });
    /* Run javascript inside of the page */
    let data = await page.evaluate(() => {
        let title = document.querySelector('h1').innerText;
        let img_urls = Array.from(document.querySelectorAll('img')).map(i => i.src); //waits to receive url images
        let text = Array.from(document.querySelectorAll('p')).map(p => p.innerText).join(", "); //waits to receive url images

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

// scrapper("https://www.nytimes.com/2019/10/24/business/wework-growth.html")