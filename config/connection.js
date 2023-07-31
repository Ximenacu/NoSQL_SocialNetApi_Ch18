const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/Social18DB');

module.exports = mongoose.connection;