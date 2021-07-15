const mongoose = require('mongoose');
mongoose.set('debug', true);

const roleSchema = mongoose.Schema({
    _id: Number,
    role_name:  String
}, { collection: 'role' });

module.exports = mongoose.model('Role', roleSchema);