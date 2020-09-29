const mongoose = require('mongoose');
const Schema = mongoose.Schema

const kategori = new Schema({
    nama: {
        type: String,
        require: true
    },
    sub: {
        type: [String],
        require: true
    },
});

module.exports = mongoose.model('kategori', kategori)