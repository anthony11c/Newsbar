const mongoose = require('mongoose');
mongoose.set('debug', true);

const userSchema = mongoose.Schema({
    _id: Number,
    username:  String,
    password: String,
    role: String,
    name: String
}, { collection: 'users' });

module.exports = mongoose.model('User', userSchema);