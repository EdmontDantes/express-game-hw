const express = require('express');
const app = express();
const path = require('path');
const morgan = require('morgan');
require('dotenv').config();

const snarky = require('./middlewares/snarky');
const gameRouter = require('./routes/gameRoutes');

const port = process.env.PORT || 8500;

//qoutes in console
app.use(snarky);
//morgan packages use
app.use(morgan('dev'));
//use expres.json and urlencoded
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
//base route
app.use('api/v1/games', gameRouter); //base/parent route

//listen port
app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});
