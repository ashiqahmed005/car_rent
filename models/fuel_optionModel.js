var mongoose = require('mongoose');
var Schema   = mongoose.Schema;

var fuel_optionSchema = new Schema({
	'description' : String
});

module.exports = mongoose.model('fuel_option', fuel_optionSchema);
