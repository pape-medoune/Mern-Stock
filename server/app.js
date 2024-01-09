require("./models/db");
const cors = require("cors");
const helmet = require("helmet");
const express = require("express");
// const bodyparser = require("body-parser");
const MongoClient = require("mongodb").MongoClient;
const ObjectId = require("mongodb").ObjectId;
const client = new MongoClient("mongodb://127.0.0.1:27017/gestionstock");
// const session = require("express-session");
const bcrypt = require("bcrypt");
const bodyParser = require("body-parser");
const multer = require("multer");
const { createTokens } = require("./JWT");

const app = express();

// app.use(bodyparser.urlencoded({ extended: true }));
// app.use(bodyparser.json());
// app.use(express.urlencoded({ extended: true }));

app.use(
  cors({
    origin: "http://localhost:3000",
    methods: ["GET", "POST", "PUT", "DELETE"], // Les méthodes HTTP autorisées
    allowedHeaders: ["Content-Type", "Authorization"], // Les en-têtes autorisés
    credentials: true,
  })
);


app.use(helmet());

const cspConfig = {
  directives: {
    defaultSrc: ["'self'", "http://localhost:4400"],
    imgSrc: ["'self'", "http://localhost:4400"],
  },
};

app.use(helmet.contentSecurityPolicy(cspConfig));

app.use(express.json());

// app.use(
//   bodyparser.urlencoded({
//     extended: true,
//   })
// );

// app.use(bodyparser.json());

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get("/display", (req, res) => {
  const dbname = "gestionstock";
  const dbn = client.db(dbname);

  dbn
    .collection("produits")
    .find()
    .toArray()
    .then((result) => {
      console.log("L'affichage s'est fait avec succès");
      // Send the result as a response to the client
      res.json(result);
    })
    .catch((err) => {
      console.error(err);
      // Handle the error and send an error response if necessary
      res.status(500).json({ error: "An error occurred" });
    });
});

app.delete("/delete", (req, res) => {
  const dbName = "gestionstock";
  const collectionName = "produits";
  const dbn = client.db(dbName);
  // const id = req.query.id;
  console.log("Deleting Fait avec succés");

  dbn
    .collection(collectionName)
    .findOneAndDelete({ _id: new ObjectId(req.query.id) })
    .then(() => {
      console.log("Deleting Fait avec succés");
    })
    .catch((err) => {
      console.log("Produit non trouvé! " + err);
    });
});

const photo = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./images");
    cb(null, "../src/assets/imagesProduits");
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});

const upload = multer({
  storage: photo,
});

app.put("/maj", upload.single("image"), (req, res) => {
  const dbName = "gestionstock";
  const collectionName = "produits";
  const dbn = client.db(dbName);

  const { nomproduit, description, prix } = req.body;
  const image = req.file ? req.file.filename : null;

  dbn
    .collection(collectionName)
    .findOneAndUpdate(
      { _id: new ObjectId(req.query.id) },
      {
        $set: {
          nomproduit,
          description,
          prix,
          image,
        },
      }
    )
    .then((result) => {
      // Debugging: Log the result of the update operation
      console.log("Update result:", result);

      if (result.value) {
        console.log("La mise à jour s'est faite avec succès!");
        res.json({ message: "Update successful" });
      } else {
        console.log("Aucun produit trouvé pour la mise à jour.");
        res.status(404).json({ error: "Product not found for update." });
      }
    })
    .catch((err) => {
      // Debugging: Log any errors that occur
      console.log("Erreur lors de la mise à jour du produit:", err);
      res.status(500).json({ error: "An error occurred during the update." });
    });
});

app.post("/add", upload.single("image"), (req, res) => {
  const dbname = "gestionstock";
  const dbn = client.db(dbname);

  const { nomproduit, description, prix } = req.body;
  const image = req.file ? req.file.filename : null;

  console.log(req.file);
  console.log(req.body);
  dbn
    .collection("produits")
    .insertOne({ nomproduit, description, prix, image })
    .then((result) => {
      console.log("L'insertion s'est faite avec succès");
      res.json(result);
    })
    .catch((err) => {
      console.log("Erreur lors de l'insertion: " + err);
    });
});

// app.use(session({
//   secret: ''Mouhamedoune,
//   resave: false,
//   saveUninitialized: true,
// }));

// const verification = (req,res,next)=>{
//   if(!req.session.user)
//   {
//     return res.redirect("/login");
//   }
//   next();
// }

// //Se connecter en tant qu'admin
// app.get("/login",verification,(req,res)=>{
//   const {username,password} = req.body;
//   const dbn = client.db("gestionstock");
//   const collectionName = "adminusers";

//   dbn.collection(collectionName).find({})
//   .then(()=>{

//   })
//   .catch(()=>{

//   })
// })

//S'inscrire en tant que admin
// app.post("/inscription", (req, res) => {
//   const passwordHash = bcrypt.hashSync(req.body.password, 10);

//   const { prenom, nom, username } = req.body;
//   const dbn = client.db("gestionstock");
//   const collectionName = "adminusers";

//   dbn
//     .collection(collectionName)
//     .insertOne({ prenom, nom, username, passwordHash })
//     .then((data) => {
//       res.send("Donnée inserer avec succés!");
//     })
//     .catch((err) => {
//       console.log(err);
//     });
// });

// app.post("/login", (req, res) => {
//   const dbname = "gestionstock";
//   const dbn = client.db(dbname);
//   const username = req.body.utilisateur;
//   const password = req.body.password;

//   console.log(username);
//   console.log(password);

//   dbn
//     .collection("adminusers")
//     .findOne({ username: username })
//     .then((user) => {
//       if (user) {
//         if (password === user.password) {
//           console.log("Connexion Reuissit");
//         } else {
//           console.log("Erreur sur le mot de passe saisie !");
//         }
//       } else {
//         console.log("User non trouvé");
//       }
//     })
//     .catch((err) => {
//       console.error("Unexpected error:", err);
//     });
// });
 
app.post("/register", (req, res) => {
  const { prenom, nom, nomDutilisateur, motDePasse } = req.body;

  // Generate a salt
  const saltRounds = 12;
  const salt = bcrypt.genSaltSync(saltRounds);

  // Hash the password
  const hash = bcrypt.hashSync(motDePasse, salt);

  const dbn = client.db("gestionstock");
  const collectionName = "adminusers";

  dbn
    .collection(collectionName)
    .insertOne({
      prenom,
      nom,
      nomDutilisateur,
      hash,
    })
    .then(() => {
      console.log("Insertion fait avec succès!!");
      res.json({ success: true });
    })
    .catch((err) => {
      console.log("Erreur Insertion " + err);
      res.status(500).json({ error: "Internal Server Error" });
    });
});

app.post("/login", (req, res) => {
  const dbn = client.db("gestionstock");
  const collectionN = dbn.collection("adminusers");
  const username = req.body.nomDutilisateur;
  const password = req.body.motDePasse;

  console.log(username);
  console.log(password);
  collectionN
    .findOne({ nomDutilisateur: username })
    .then((user) => {
      if (!user) {
        res.status(400).json({ error: "User not found!" });
        return;
      }

      const dbPassword = user.hash;

      bcrypt.compare(password, dbPassword).then((match) => {
        if (!match) {
          res.status(400).json({
            error: "Erreur sur votre mot de passe et le nom d'utilisateur ",
          });
        } else {
          const accessToken = createTokens(user);
          console.log("User connected successfully");
          res.json({ accessToken });
        }
      });
    })
    .catch((err) => {
      console.log("erreur!" + err);
      res.status(500).json({ error: "Erreurrrr" });
    });
});

app.listen(4400, () => {
  console.log("Express server started at port : 4400");
});
