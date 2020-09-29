const kategori = require('../../kategori.models');

module.exports = {
    addKategori : async (payload)=>{
        const newKategori = new kategori(payload)
        const result = await newKategori.save()
        return result
    }
}