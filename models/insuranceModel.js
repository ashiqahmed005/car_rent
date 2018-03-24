var mongoose = require('mongoose');
var Schema   = mongoose.Schema;

var insuranceSchema = new Schema({
	'name' : String,
	'description' : String,
	'policy' : String,
	'cost' : Number
});

module.exports = mongoose.model('insurance', insuranceSchema);
