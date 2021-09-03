const mongoose = require('mongoose');
mongoose.set('debug', true);

const kategorijatSchema = mongoose.Schema({
    _id: Number,
    naziv_kategorije:  String
}, { collection: 'kategorija' });

module.exports = mongoose.model('Kategorija', kategorijatSchema);