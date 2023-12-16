// let mongoClient = require('mongodb').MongoClient;
// let express = require('express');

// let url = 'mongodb://localhost:27017/gestionstocks';

// mongoClient.connect(url, function (err, db) {
//     if (err) throw err;
//     console.log("Database created !!!");
//     db.close();
// })

const express = require('express');
const cors = require('cors');

const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

// Connect MongoDB at default port 27017.
mongoose.connect('mongodb://localhost:27017/gestionstocks', {
    useNewUrlParser: true,
    useCreateIndex: true,
}, (err) => {
    if (!err) {
        console.log('MongoDB Connection Succeeded.')
    } else {
        console.log('Error in DB connection: ' + err)
    }
});

