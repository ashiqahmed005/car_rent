var mongoose = require('mongoose');
var Schema   = mongoose.Schema;

var carSchema = new Schema({
	'car_category_id' : {
	 	type: Schema.Types.ObjectId,
	 	ref: 'car_category'
	},
	'brand' : String,
	'model' : String,
	'production_year' : String,
	'mileage' : String,
	'color' : String,
	'current_location_id' : {
	 	type: Schema.Types.ObjectId,
	 	ref: 'location'
	}
});

module.exports = mongoose.model('car', carSchema);
