const mongoose = require('mongoose');

var productSchema =new mongoose.Schema({
    nom:{
        type:String
    },
    description:{
        type:String
    },
    prix:{
        type:String
    },
    image:{
        type:String
    },
})

const produits = mongoose.model('produits',productSchema)

module.exports = produits;

