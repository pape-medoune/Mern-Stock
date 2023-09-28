// Require mongoose
const mongoose = require('mongoose'); 

// Définir le schéma du produit
const produits = new mongoose.Schema({
  nomproduit: {
    type: String, 
    required: true,
  },
  description: {
    type: String, 
    required: true,
  },
  prix: {
    type: String, 
    required: true,
  },
  image: {
    type: String, 
    required: true, 
  },
});

// Créer le modèle "Produit" à partir du schéma
const Produit = mongoose.model('produits', produits);

// Exporter le modèle
module.exports = Produit;
