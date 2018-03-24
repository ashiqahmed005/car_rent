var mongoose = require('mongoose');
var Schema   = mongoose.Schema;

var locationSchema = new Schema({
	'street_adress' : String,
	'city' : String,
	'state' : String,
	'country' : String,
	'zip' : String
});

module.exports = mongoose.model('location', locationSchema);
