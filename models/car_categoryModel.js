var mongoose = require('mongoose');
var Schema   = mongoose.Schema;

var car_categorySchema = new Schema({
	'name' : String,
	'rental_value' : Number
});

module.exports = mongoose.model('car_category', car_categorySchema);
