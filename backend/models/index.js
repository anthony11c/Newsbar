const dbConfig = require('../config/db.config.js')
const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

const db = {};

db.mongoose = mongoose;
db.url = dbConfig.url;

db.users = require('./user')(mongoose);
db.vijesti = require('./vijest')(mongoose);
db.role = require('./role')(mongoose);

db.ROLES = ["user", "admin"];

module.exports = db;