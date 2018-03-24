var mongoose = require('mongoose');
var Schema   = mongoose.Schema;

var rentalSchema = new Schema({
	'customer_id' : {
	 	type: Schema.Types.ObjectId,
	 	ref: 'customer'
	},
	'car_id' : {
	 	type: Schema.Types.ObjectId,
	 	ref: 'car'
	},
	'pick_up_location_id' : {
	 	type: Schema.Types.ObjectId,
	 	ref: 'location'
	},
	'drop_off_location_id' : {
	 	type: Schema.Types.ObjectId,
	 	ref: 'location'
	},
	'start_date' : Date,
	'end_date' : Date,
	'remarks' : String,
	'fuel_option_id' : {
	 	type: Schema.Types.ObjectId,
	 	ref: 'fuel_option\'
	}
});

module.exports = mongoose.model('rental', rentalSchema);
