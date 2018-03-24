var mongoose = require('mongoose');
var Schema   = mongoose.Schema;

var equipmentSchema = new Schema({
	'name' : String,
	'equipment_category_id' : {
	 	type: Schema.Types.ObjectId,
	 	ref: 'equipment_category'
	},
	'current_location_id' : {
	 	type: Schema.Types.ObjectId,
	 	ref: 'location'
	}
});

module.exports = mongoose.model('equipment', equipmentSchema);
