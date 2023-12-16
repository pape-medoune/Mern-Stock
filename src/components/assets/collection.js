use("licence3");
// db.createCollection('exercice')
// db.collection.renameCollection('produits')
db.exercice.insertMany([
  {
    nom: "Hp",
    model: "Pavillion",
    description:
      "RAM : 8Go | Disque : 250Go SSD | Autonomie : 6h | Processeur : 2.5Ghz",
    photo: "insert a link to display a picture of this device",
    prix: 200000,
  },
  {
    nom: "Lenevo",
    model: "Thinkpad T450",
    description:
      "RAM : 8Go | Disque : 250Go SSD | Autonomie : 5h30' | Processeur : 2.5Ghz",
    photo: "insert a link to display a picture of this device",
    prix: 190000,
  },
  {
    nom: "Lenevo",
    model: "Thinkpad T460",
    description:
      "RAM : 12Go | Disque : 320Go SSD | Autonomie : 6h | Processeur : 2.3Ghz",
    photo: "insert a link to display a picture of this device",
    prix: 190000,
  },
  {
    nom: "Dell",
    model: "Latitude",
    description:
      "RAM : 8Go | Disque : 500Go HDD | Autonomie : 5h | Processeur : 2.5Ghz",
    photo: "insert a link to display a picture of this device",
    prix: 180000,
  },
  {
    nom: "Ford",
    model: "Mustang",
    description: "",
    photo: "insert a link to display a picture of this car",
    prix: 3250000,
  }
]);
