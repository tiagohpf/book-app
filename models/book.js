const Sequelize = require('sequelize');
const sequelize = require('../util/database');

const Book = sequelize.define('book', {
    book_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true
    },
    goodreads_book_id: {
        type: Sequelize.INTEGER,
    },
    best_book_id: {
        type: Sequelize.INTEGER,
    },
    work_id: {
        type: Sequelize.INTEGER,
    },
    books_count: {
        type: Sequelize.INTEGER,
    },
    isbn: {
        type: Sequelize.STRING,
        allowNull: false
    },
    isbn13: {
        type: Sequelize.STRING
    },
    authors: {
        type: Sequelize.STRING,
        allowNull: false
    },
    original_publication_year: {
        type: Sequelize.FLOAT
    },
    original_title: {
        type: Sequelize.STRING,
        allowNull: false
    },
    title: {
        type: Sequelize.STRING,
        allowNull: false
    },
    language_code: {
        type: Sequelize.STRING,
        allowNull: false
    },
    average_rating: {
        type: Sequelize.FLOAT
    },
    ratings_count: {
        type: Sequelize.INTEGER
    },
    work_ratings_count: {
        type: Sequelize.INTEGER
    },
    work_text_reviews_count: {
        type: Sequelize.INTEGER
    },
    ratings_1: {
        type: Sequelize.INTEGER
    },
    ratings_2: {
        type: Sequelize.INTEGER
    },
    ratings_3: {
        type: Sequelize.INTEGER
    },
    ratings_4: {
        type: Sequelize.INTEGER
    },
    ratings_5: {
        type: Sequelize.INTEGER
    },
    image_url: {
        type: Sequelize.TEXT
    },
    small_image_url: {
        type: Sequelize.TEXT
    }
}, {
    timestamps: false
})

module.exports = Book;
