const express = require('express');
const fetch = require('node-fetch');
const jsdom = require("jsdom");


const app = express();

app.use(express.json());


app.use(express.static('public'));
app.set('views','./src/views');
app.set('view engine','ejs');

app.listen(3030, () => console.log('listening at 3030'));
