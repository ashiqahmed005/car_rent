var mongoose = require('mongoose');
var Schema   = mongoose.Schema;

var car_equipmentSchema = new Schema({
	'equipment_id' : {
	 	type: Schema.Types.ObjectId,
	 	ref: 'equipment'
	},
	'car_id' : {
	 	type: Schema.Types.ObjectId,
	 	ref: 'car'
	},
	'start_date' : Date,
	'end_date' : Date
});

module.exports = mongoose.model('car_equipment', car_equipmentSchema);
