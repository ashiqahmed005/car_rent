var mongoose = require('mongoose');
var Schema   = mongoose.Schema;

var equipment_categorySchema = new Schema({
	'name' : String,
	'rental_value' : Number
});

module.exports = mongoose.model('equipment_category', equipment_categorySchema);
