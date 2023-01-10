// Tests practice with mocha using Mock Users data.
require('dotenv').config();
const express = require('express');
const cors = require('cors');
const app = express();
const mongo = require('./configs/mongo');

const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

// user routes for test
app.use('/api', require('./src/routes/users.route'));

mongo.dbConnect();

app.listen(PORT, () => {
    console.log(`App running on: http://localhost:${PORT}`)
})

module.exports = app;