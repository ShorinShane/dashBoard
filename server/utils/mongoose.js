const mongoose = require("mongoose");
module.exports = function(dataBaseName){
    mongoose.connect(`mongodb://localhost/${dataBaseName}`);
    require('../models/dashboard');
}