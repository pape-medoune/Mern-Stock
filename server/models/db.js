const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/gestionstock',)
.then((result)=>{
    console.log("Connected")
})
.catch((err)=>{
    console.log('connectewoul erreur bi nak: '+err);
})

require('./product.model');