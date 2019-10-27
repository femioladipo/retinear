const puppeteer = require('puppeteer');
const parseDomain = require("parse-domain")





const scrapper = async (url) => {
    const { domain } = parseDomain(url)

    /* Initiate the Puppeteer browser */
    const browser = await puppeteer.launch();

    const page = await browser.newPage();

    /* Go to the IMDB Movie page and wait for it to load */
    await page.goto(url, { waitUntil: 'networkidle0' });
    /* Run javascript inside of the page */

    let data = await page.evaluate(() => {
        let title = document.querySelector('h1').innerText;
        let img_urls = Array.from(document.querySelectorAll('img')).map(i => i.src); //waits to receive url images
<<<<<<< HEAD
        let text = Array.from(document.querySelectorAll('p')).map(p => p.innerText).join(", "); //waits to receive url images


=======
        let textf = Array.from(document.querySelectorAll('p')); //waits to receive url images
        let leng = textf.length;
        let textFiltered = [];
        for(let i=Math.floor(leng*0.15);i<Math.floor(leng*0.8); i++){
            textFiltered.push(textf[i]);
        }
        let text = textFiltered.map(p => p.innerText).join(", ");
>>>>>>> 10351decaaf4a309a66a7fd87ffd2e2cf78bba94
        /* Returning an object filled with the scraped data */

        return {
            title,
            img_urls,
            text
        }

    });
    await browser.close();

    // console.log(data)
    const result = Object.assign({ websiteName: domain }, data) //displays domain name 
    // console.log(result)
    return result
};

module.exports = exports = scrapper

