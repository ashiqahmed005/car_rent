var mongoose = require('mongoose');
var Schema   = mongoose.Schema;

var rental_invoiceSchema = new Schema({
	'rental_id' : {
	 	type: Schema.Types.ObjectId,
	 	ref: 'rental'
	},
	'car_rent' : Number,
	'equipment_rent_total' : Number,
	'insurance_cost_total' : Number,
	'service_tax' : Number,
	'VAT' : Number,
	'total_amount_payable' : Number,
	'discount_amount' : Number,
	'net_amount_payable' : Number
});

module.exports = mongoose.model('rental_invoice', rental_invoiceSchema);
