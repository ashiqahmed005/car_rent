var customerModel = require('../models/customerModel.js');

/**
 * customerController.js
 *
 * @description :: Server-side logic for managing customers.
 */
module.exports = {

    /**
     * customerController.list()
     */
    list: function (req, res) {
        customerModel.find(function (err, customers) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting customer.',
                    error: err
                });
            }
            return res.json(customers);
        });
    },

    /**
     * customerController.show()
     */
    show: function (req, res) {
        var id = req.params.id;
        customerModel.findOne({_id: id}, function (err, customer) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting customer.',
                    error: err
                });
            }
            if (!customer) {
                return res.status(404).json({
                    message: 'No such customer'
                });
            }
            return res.json(customer);
        });
    },

    /**
     * customerController.create()
     */
    create: function (req, res) {
        var customer = new customerModel({
			name : req.body.name,
			birth_date : req.body.birth_date,
			driving_license_number : req.body.driving_license_number,
			driving_license_issue_date : req.body.driving_license_issue_date

        });

        customer.save(function (err, customer) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when creating customer',
                    error: err
                });
            }
            return res.status(201).json(customer);
        });
    },

    /**
     * customerController.update()
     */
    update: function (req, res) {
        var id = req.params.id;
        customerModel.findOne({_id: id}, function (err, customer) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting customer',
                    error: err
                });
            }
            if (!customer) {
                return res.status(404).json({
                    message: 'No such customer'
                });
            }

            customer.name = req.body.name ? req.body.name : customer.name;
			customer.birth_date = req.body.birth_date ? req.body.birth_date : customer.birth_date;
			customer.driving_license_number = req.body.driving_license_number ? req.body.driving_license_number : customer.driving_license_number;
			customer.driving_license_issue_date = req.body.driving_license_issue_date ? req.body.driving_license_issue_date : customer.driving_license_issue_date;
			
            customer.save(function (err, customer) {
                if (err) {
                    return res.status(500).json({
                        message: 'Error when updating customer.',
                        error: err
                    });
                }

                return res.json(customer);
            });
        });
    },

    /**
     * customerController.remove()
     */
    remove: function (req, res) {
        var id = req.params.id;
        customerModel.findByIdAndRemove(id, function (err, customer) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when deleting the customer.',
                    error: err
                });
            }
            return res.status(204).json();
        });
    }
};
