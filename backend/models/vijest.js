const mongoose = require('mongoose');
mongoose.set('debug', true);

const vijestSchema = mongoose.Schema({
    _id: Number,
    kategorija:  String,
    naslov: String,
    datum: String,
    user: Number,
    tekst_kratki: String,
    tekst_full: String
}, { collection: 'vijest' });

module.exports = mongoose.model('Vijest', vijestSchema);