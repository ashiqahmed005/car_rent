var mongoose = require('mongoose');
var Schema   = mongoose.Schema;

var reservation_equipmentSchema = new Schema({
	'reservation_id' : {
	 	type: Schema.Types.ObjectId,
	 	ref: 'reservation'
	},
	'equipment_category_id' : {
	 	type: Schema.Types.ObjectId,
	 	ref: 'equipment_category'
	}
});

module.exports = mongoose.model('reservation_equipment', reservation_equipmentSchema);
