var mongoose = require('mongoose');
var Schema   = mongoose.Schema;

var flight_detailSchema = new Schema({
	'reservation_id' : {
	 	type: Schema.Types.ObjectId,
	 	ref: 'reservation'
	},
	'flight_number' : String,
	'coming_from' : String,
	'expected_arrival_time' : Date
});

module.exports = mongoose.model('flight_detail', flight_detailSchema);
