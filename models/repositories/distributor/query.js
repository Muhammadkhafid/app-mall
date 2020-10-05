const distributor = require('../../distributorModel');

module.exports = {
    getAll : async ()=>{
        const result = await distributor.find()
        return result
    },
    getById : async (payload)=>{
        const result = await distributor.find(payload)
        return result
    },
    getByName : async (payload)=>{
        const result = await distributor.find(payload)
        return result
    }
}