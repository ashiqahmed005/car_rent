var mongoose = require('mongoose');
var Schema   = mongoose.Schema;

var customerSchema = new Schema({
	'name' : String,
	'birth_date' : Date,
	'driving_license_number' : String,
	'driving_license_issue_date' : Date
});

module.exports = mongoose.model('customer', customerSchema);
