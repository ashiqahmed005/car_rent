var mongoose = require('mongoose');
var Schema   = mongoose.Schema;

var reservationSchema = new Schema({
	'pick_up_location_id' : {
	 	type: Schema.Types.ObjectId,
	 	ref: 'location'
	},
	'drop_off_location_id' : {
	 	type: Schema.Types.ObjectId,
	 	ref: 'location'
	},
	'car_category_id' : {
	 	type: Schema.Types.ObjectId,
	 	ref: 'car_category'
	},
	'customer_id' : {
	 	type: Schema.Types.ObjectId,
	 	ref: 'customer'
	}
});

module.exports = mongoose.model('reservation', reservationSchema);
