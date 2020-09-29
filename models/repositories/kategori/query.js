const kategori = require('../../kategori.models');

module.exports = {
    getAllKategori : async ()=>{
        const recordset = await kategori.find()
        return recordset
    }
}