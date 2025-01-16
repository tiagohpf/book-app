const express = require('express');
require('dotenv').config();
const bookRouter = require('./routes/book');

const app = express();
const PORT = process.env.PORT || 3000;

app.use('/book', bookRouter);

app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
});
