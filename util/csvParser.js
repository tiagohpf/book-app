const fs = require('fs');
const csvParser = require('csv-parser')

const parseFile = (filePath) => {
    return new Promise((resolve, reject) => {
        let books_data = [];

        fs.createReadStream(filePath)
            .pipe(csvParser())
            .on('data', data => books_data.push(data))
            .on('end', () => {
                fs.unlinkSync(filePath);
                resolve(books_data);
            })
            .on('error', err => {
                fs.unlinkSync(filePath);
                reject(err)
            });
    })
}

module.exports = {
    parseFile
}
