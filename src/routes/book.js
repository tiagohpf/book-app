const express = require('express');
const multer = require('multer');
const bookController = require('../controllers/book');
const csvParser = require('../util/csvParser');

const router = express.Router();
const upload = multer({dest: 'uploads/'});

router.post('/', upload.single('file'), async (req, res) => {
    if (!req.file) {
        return res.status(400).send({data: [], error: 'File Not Found'});
    }

    try {
        const bookData = await csvParser.parseFile(req.file.path);
        const books = await bookController.addBooks(bookData);
        res.status(200).send({data: books});
    } catch (error) {
        console.error(`Error processing file: ${error}`);
        res.status(500).send({data: [], error: 'Error processing file'});
    }
})

module.exports = router;
