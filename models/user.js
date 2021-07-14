const mongoose = require('mongoose');
const { ObjectUnsubscribedError } = require('rxjs');
mongoose.set('debug', true);

let userSchema = mongoose.Schema({
    _id: Number,
    username:  String,
    password: String,
    role: String,
    name: String
});

let User = module.exports = mongoose.model('User', userSchema);