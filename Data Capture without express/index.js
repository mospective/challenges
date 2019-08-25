const http = require('http');
const GoogleSpreadsheet = require('google-spreadsheet');
const { promisify } = require('util');
const fs = require('fs');



const creds = require('./client_secret.json');

var test = [];

function printDataInConsole(country) {
    console.log(`Country: ${country.country}`);
    console.log(`Capital: ${country.capitalcity}`);
    console.log(`Population: ${country.population}`);
    console.log('-------------------------------------');
    //test.push(`Country: ${country.country} +`);
    test.push({
        country: `Country: ${country.country}`,
        capital: `Capital: ${country.capitalcity}`,
        population: `Population: ${country.population}`
    })

}

async function accessDataCapture() {
    //access to google spreadsheet through authentication
    const doc = new GoogleSpreadsheet('1HDc13wQtLiZL1bObiOoFzvRFyEvgei5Q8OCMzj4gWK8');
    await promisify(doc.useServiceAccountAuth)(creds);
    // view the data
    const info = await promisify(doc.getInfo)();
    //access the spreadsheet data countries
    const sheet = info.worksheets[0];
    //console.log(`Title: ${sheet.title}, Rows: ${sheet.rowCount}`);
    //access the rows
    const rows = await promisify(sheet.getRows) ({
        offset: 1
    });
    // console.log(rows);
    rows.forEach(row => {
        printDataInConsole(row);
        // test = row;
    })


}

accessDataCapture();

// module.exports.accessDataCapture = accessDataCapture;
// module.exports.test = test;

http.createServer(function (req, res) {
    var html = buildHtml(req);

    res.writeHead(200, {
      'Content-Type': 'text/html',
      'Content-Length': html.length,
      'Expires': new Date().toUTCString()
    });
    res.end(html);
        
  }).listen(8000);

  function buildHtml(req) {
    var header = '';
    var body = '';
    var para = '';

    for (var i = 0; i < test.length; i++) {
     para += '<div class="card"><p>' + test[i].country + '</p>';
     para += '<p>' + test[i].capital + '</p>';
     para += '<p>' + test[i].population + '</p></div>';
    //  body += '<div>' + para + '</div>';
      console.log(para);
    }
    console.log(test);


    var meta = '<meta charset="UTF-8">';
    meta += '<meta name="viewport" content="width=device-width, initial-scale=1.0">';

    header += meta; 
    

  
  
    // concatenate header string
    // concatenate body string
  
    return '<!DOCTYPE html>'
         + '<html><head>' + header + '</head><body><div class="main">' + para + '</div></body></html>';
  };

