const Book = require('../models/book');
const emailSender = require('../util/email');

const addBooks = async (books) => {
    try {
        console.log('Adding books to Database...');
        await Book.bulkCreate(books);
        emailSender.sendEmail('admin@admin.com', books);
        return books
    } catch (error) {
        console.error('Error adding books');
        emailSender.sendEmail('admin@admin.com', [], error);
        throw error;
    }
}

module.exports = {
    addBooks
}
