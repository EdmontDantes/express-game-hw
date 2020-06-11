const express = require('express');
const app = express();
// const path = require('path');
const morgan = require('morgan');
require('dotenv').config();

const gameRouter = require('./routes/gameRoutes');
const snarky = require('./middlewares/snarky');

const port = process.env.PORT || 8500;

//qoutes in console
app.use(snarky);
//morgan invoke
app.use(morgan('dev'));
//let it work with express.json and urlencoded
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
//base path
app.use('/api/v1/games', gameRouter); // Parent route

//listen port
app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});
