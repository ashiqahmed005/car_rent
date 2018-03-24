var mongoose = require('mongoose');
var Schema   = mongoose.Schema;

var rental_insuranceSchema = new Schema({
	'rental_id' : {
	 	type: Schema.Types.ObjectId,
	 	ref: 'rental'
	},
	'insurance_id' : {
	 	type: Schema.Types.ObjectId,
	 	ref: 'insurance'
	}
});

module.exports = mongoose.model('rental_insurance', rental_insuranceSchema);
