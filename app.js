const express = require('express')
const app = express()
require ('./models/dbConnect')
const bodyParser = require("body-parser");
var session = require('express-session')
const userauth = require('./controllers/userauth');
const auth = require('./utils/authlogin')
const routerProduk = require('./controllers/routerProduk');
const Distributor = require('./controllers/distributorController');
const Kurir = require('./controllers/kurirController');
const kategori = require('./controllers/kategoriController');
const request = require("supertest");
const admin = require('./controllers/adminController')



app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.set('view engine', 'pug');
app.use(express.static('views'));

app.use(session({
    secret: 'secrett',
    resave: true,
    saveUninitialized: true
}));

app.use('/', userauth);
app.use('/admin',auth.is_admin,admin);
app.use('/distributor', Distributor);
app.use('/kurir', Kurir);
app.use('/kategori',kategori)
app.use('/produk', routerProduk);

app.listen(process.env.PORT || 3000,() => {
    console.log(`App Started on PORT ${process.env.PORT || 3000}`);
});
