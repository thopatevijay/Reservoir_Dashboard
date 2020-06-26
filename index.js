// Express Framework
const express = require('express');

// for fetching fetch function
const fetch = require('node-fetch');

// For passing fetched html result through DOM
const jsdom = require("jsdom");

const app = express();

app.use(express.json());
app.use(express.static('public'));

app.set('views','./src/views');
app.set('view engine','ejs');


// defining PORT
app.listen(3030, () => console.log('listening at 3030'));
