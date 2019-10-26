const puppeteer = require('puppeteer');
const IMDB_URL = (movie_id) => `https://www.imdb.com/title/${movie_id}/`;
const MOVIE_ID = `tt6763664`;
// scrapper function used for test
const scrapper = async (url) => {
  /* Initiate the Puppeteer browser */
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  /* Go to the IMDB Movie page and wait for it to load */
  await page.goto(IMDB_URL(MOVIE_ID), { waitUntil: 'networkidle0' });
  /* Run javascript inside of the page */
  let data = await page.evaluate(() => {
    let title = document.querySelector('div[class="title_wrapper"] > h1').innerText;
    let images = Array.from(document.querySelectorAll('img')); //waits to receive url images

    for (const img of images) {
        console.log(img);
    }

    let srcs = images.map(i => i.src); //for every image in the array and get the image source

    /* Returning an object filled with the scraped data */
    return {
        title,
        srcs
    }
    
  });
  /* Outputting what we scraped */
  console.log(data);
  await browser.close();

};

scrapper(IMDB_URL)
// let a = () => console.log(1)
// a()