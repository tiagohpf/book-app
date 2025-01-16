const Book = require('../models/book');

const addBooks = async (books) => {
    try {
        await Book.bulkCreate(books);
        console.log(`${books.length} added`);
        return books
    } catch (error) {
        console.error('Error adding books');
        throw error;
    }
}

module.exports = {
    addBooks
}
