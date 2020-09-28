
const express = require('express')
const app = express()
require ('./models/dbConnect')
const bodyParser = require("body-parser");
var session = require('express-session')
const routerProduk = require('./controllers/routerProduk');
const exampleUtils = require('./utils/example.Utils')

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.set('view engine', 'ejs');
app.use(express.static('views'));

app.use(session({
    secret: 'secrett',
    resave: true,
    saveUninitialized: true
}));

app.use('/produk', routerProduk);
// app.use('/admin',exampleUtils,exampleRouter);

app.listen(process.env.PORT || 3000,() => {
    console.log(`App Started on PORT ${process.env.PORT || 3000}`);
});
