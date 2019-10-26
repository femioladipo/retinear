const https = require('https');
var express = require('express');
var cors = require('cors');
var app = express();
const port = 3000;

app.use(cors());

const getPage = '/getpage';
const pageQuery = getPage + '?url='; 

app.get(getPage, function (req, res) {
    
    const url = req.query.url;
    
    console.log(url);
    
    const options = {
      headers: { 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/77.0.3865.120 Safari/537.36' }
    };
    
    https.get(url, options, (resp) => {
      let data = '';

      // A chunk of data has been recieved.
      resp.on('data', (chunk) => {
        data += chunk;
      });

      // The whole response has been received. Print out the result.
      resp.on('end', () => {
        
        var pathArray = url.split("/");
        var protocol = pathArray[0];
        var host = pathArray[2];
        var root = protocol + '//' + host;
        
        data = data.replace('src="/', 'src="' + root + '/');
        data = data.replace('srcset="/', 'srcset="' + root + '/');
        // data = data.replace('action="/', 'action="' + pageQuery + root + '/');
        // data = data.replace('href="', 'href="' + pageQuery);

        res.write(data);
      });

    }).on("error", (err) => {
      console.log("Error: " + err.message);
    });
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
