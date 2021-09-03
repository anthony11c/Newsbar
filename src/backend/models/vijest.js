const mongoose = require('mongoose');
mongoose.set('debug', true);

const vijestSchema = mongoose.Schema({
    kategorija: String,
    naslov: String,
    datum: String,
    user: Number,
    tekst_kratki: String,
    tekst_full: String,
    slika: String
}, { collection: 'vijest' });

/* vijestSchema.method("toJSON", function() {
    const { __v, _id, ...object } = this.toObject();
    object.id = _id;
    return object;
  }); */

module.exports = mongoose.model('Vijest', vijestSchema);