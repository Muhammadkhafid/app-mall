const express = require('express');
const router = express.Router();

const {
    formAdd,
    formEdit,
    getAllPenjualan,
    getPenjualanById,
    addPenjualan,
    editPenjualan,
    deletePenjualan
} = require('../controllers/penjualan.controller');

// Form
router.get('/add', formAdd)
router.get('/edit', formEdit)

// Api
router.get('/', getAllPenjualan)
router.get('/:id', getPenjualanById)
router.post('/add', addPenjualan)
router.put('/edit/:id', editPenjualan) 
router.delete('/delete/:id', deletePenjualan)


module.exports = router