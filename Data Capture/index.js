
const GoogleSpreadsheet = require('google-spreadsheet');
const { promisify } = require('util');

const creds = require('./client_secret.json');



function printDataInConsole(country) {
    console.log(`Country: ${country.country}`);
    console.log(`Capital: ${country.capitalcity}`);
    console.log(`Population: ${country.population}`);
    console.log('-------------------------------------');

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
    })
}

// accessDataCapture();

module.exports.accessDataCapture = accessDataCapture;
// module.exports.printDataInConsole = printDataInConsole;