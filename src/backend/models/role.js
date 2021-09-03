const mongoose = require('mongoose');
mongoose.set('debug', true);

const roleSchema = mongoose.Schema({
    name: String
}, { collection: 'role' });

module.exports = mongoose.model('Role', roleSchema);