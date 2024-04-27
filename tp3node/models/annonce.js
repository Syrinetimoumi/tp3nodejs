const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const annonceSchema = new Schema({
    titre: String,
    description: String,
    prix: Number,
    date: { type: Date, default: Date.now }
});

const Annonce = mongoose.model('Annonce', annonceSchema);

module.exports = Annonce;
