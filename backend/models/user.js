const mongoose = require('mongoose');
mongoose.set('debug', true);

const userSchema = mongoose.Schema({
    username:  String,
    password: String,
    roles: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Role"
        }
    ],
    name: String
}, { collection: 'users' });

module.exports = mongoose.model("User", userSchema);