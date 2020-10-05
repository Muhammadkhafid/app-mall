const produk = require('../../modelProduk');

module.exports = {
    getAll : async ()=>{
        const result = await produk.find()
        return result
    },
    getById : async (payload)=>{
        const result = await produk.find(payload)
        return result
    },
    getByName : async (payload)=>{
        const result = await produk.find(payload)
        return result
    }
}