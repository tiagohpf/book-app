const fs = require('fs');
const csvParser = require('csv-parser')

const parseFile = (filePath) => {
    return new Promise((resolve, reject) => {
        let books_data = [];
        console.log('Parsing CSV file...');

        fs.createReadStream(filePath)
            .pipe(csvParser())
            .on('data', data => books_data.push(data))
            .on('end', () => {
                console.log('CSV file parsed')
                fs.unlinkSync(filePath);
                resolve(books_data);
            })
            .on('error', err => {
                console.error('Error parsing CSV file')
                fs.unlinkSync(filePath);
                reject(err)
            });
    })
}

module.exports = {
    parseFile
}
