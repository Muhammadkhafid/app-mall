const {
    getAllKategori
} = require('../models/repositories/kategori/query');

const {
    addKategori
} = require('../models/repositories/kategori/commmand');

module.exports = {
    getKategori : async (req, res)=>{
        try{
            const kategori = await getAllKategori()
            res.status(200).json({message:'sukses', data: kategori});
        }catch{
            res.status(400).json({message: 'error', error: err.message});
        }
    },

    addKategori : async (req, res)=>{
        const payload = {
            nama : req.body.nama,
            sub : req.body.sub
        }
        try{
            const kategori = await addKategori(payload)
            res.status(200).json({message:'sukses', data: kategori});
        }catch{
            res.status(400).json({message: 'error', error: err.message});
        }
    }
}