var express = require('express');
var router = express.Router();


const GoogleSpreadsheet = require('google-spreadsheet');
const { promisify } = require('util');

const creds = require('../client_secret.json');

var sheetData = [];

function printDataInConsole(country) {
    console.log(`Country: ${country.country}`);
    console.log(`Capital: ${country.capitalcity}`);
    console.log(`Population: ${country.population}`);
    console.log('-------------------------------------');
    sheetData.push({
        country: `Country: ${country.country}`,
        capital: `Capital: ${country.capitalcity}`,
        population: `Population: ${country.population}`
    });

}

// testData = {
//     Country: `Country: ${country.country}`
// }

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
    });
  
}

accessDataCapture();







/* GET home page. */
router.get('/', function(req, res, next) {
  // res.render('index', { title: 'Express' });
 
  var information = sheetData;
  // console.log(test);


res.render('index', {
   
    information: information
});


});

module.exports = router;
