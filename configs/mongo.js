require('dotenv').config();
const mongoose = require('mongoose');
const URI_URL = process.env.URI_URL;

const dbConnect = () => {
    mongoose.connect(URI_URL).then(
        () => { console.log('Connected sucessfully to database.')},
        err => { console.log('Error trying to connect to database: ', err)}
    )
}

module.exports = {
    dbConnect
}