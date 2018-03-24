var rental_invoiceModel = require('../models/rental_invoiceModel.js');

/**
 * rental_invoiceController.js
 *
 * @description :: Server-side logic for managing rental_invoices.
 */
module.exports = {

    /**
     * rental_invoiceController.list()
     */
    list: function (req, res) {
        rental_invoiceModel.find(function (err, rental_invoices) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting rental_invoice.',
                    error: err
                });
            }
            return res.json(rental_invoices);
        });
    },

    /**
     * rental_invoiceController.show()
     */
    show: function (req, res) {
        var id = req.params.id;
        rental_invoiceModel.findOne({_id: id}, function (err, rental_invoice) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting rental_invoice.',
                    error: err
                });
            }
            if (!rental_invoice) {
                return res.status(404).json({
                    message: 'No such rental_invoice'
                });
            }
            return res.json(rental_invoice);
        });
    },

    /**
     * rental_invoiceController.create()
     */
    create: function (req, res) {
        var rental_invoice = new rental_invoiceModel({
			rental_id : req.body.rental_id,
			car_rent : req.body.car_rent,
			equipment_rent_total : req.body.equipment_rent_total,
			insurance_cost_total : req.body.insurance_cost_total,
			service_tax : req.body.service_tax,
			VAT : req.body.VAT,
			total_amount_payable : req.body.total_amount_payable,
			discount_amount : req.body.discount_amount,
			net_amount_payable : req.body.net_amount_payable

        });

        rental_invoice.save(function (err, rental_invoice) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when creating rental_invoice',
                    error: err
                });
            }
            return res.status(201).json(rental_invoice);
        });
    },

    /**
     * rental_invoiceController.update()
     */
    update: function (req, res) {
        var id = req.params.id;
        rental_invoiceModel.findOne({_id: id}, function (err, rental_invoice) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting rental_invoice',
                    error: err
                });
            }
            if (!rental_invoice) {
                return res.status(404).json({
                    message: 'No such rental_invoice'
                });
            }

            rental_invoice.rental_id = req.body.rental_id ? req.body.rental_id : rental_invoice.rental_id;
			rental_invoice.car_rent = req.body.car_rent ? req.body.car_rent : rental_invoice.car_rent;
			rental_invoice.equipment_rent_total = req.body.equipment_rent_total ? req.body.equipment_rent_total : rental_invoice.equipment_rent_total;
			rental_invoice.insurance_cost_total = req.body.insurance_cost_total ? req.body.insurance_cost_total : rental_invoice.insurance_cost_total;
			rental_invoice.service_tax = req.body.service_tax ? req.body.service_tax : rental_invoice.service_tax;
			rental_invoice.VAT = req.body.VAT ? req.body.VAT : rental_invoice.VAT;
			rental_invoice.total_amount_payable = req.body.total_amount_payable ? req.body.total_amount_payable : rental_invoice.total_amount_payable;
			rental_invoice.discount_amount = req.body.discount_amount ? req.body.discount_amount : rental_invoice.discount_amount;
			rental_invoice.net_amount_payable = req.body.net_amount_payable ? req.body.net_amount_payable : rental_invoice.net_amount_payable;
			
            rental_invoice.save(function (err, rental_invoice) {
                if (err) {
                    return res.status(500).json({
                        message: 'Error when updating rental_invoice.',
                        error: err
                    });
                }

                return res.json(rental_invoice);
            });
        });
    },

    /**
     * rental_invoiceController.remove()
     */
    remove: function (req, res) {
        var id = req.params.id;
        rental_invoiceModel.findByIdAndRemove(id, function (err, rental_invoice) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when deleting the rental_invoice.',
                    error: err
                });
            }
            return res.status(204).json();
        });
    }
};
