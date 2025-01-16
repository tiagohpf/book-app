const express = require('express');
require('dotenv').config();
const bookRouter = require('./routes/book');
const sequelize = require('./util/database');

const app = express();
const PORT = process.env.PORT || 3000;


app.use('/book', bookRouter);

sequelize.sync().then(() => {
    console.log('Database connected successfully');
    app.listen(PORT, async () => {
        console.log(`Server started on port ${PORT}`);
    });
}).catch(err => console.log(err));


