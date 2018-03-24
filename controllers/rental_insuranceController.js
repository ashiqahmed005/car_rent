var rental_insuranceModel = require('../models/rental_insuranceModel.js');

/**
 * rental_insuranceController.js
 *
 * @description :: Server-side logic for managing rental_insurances.
 */
module.exports = {

    /**
     * rental_insuranceController.list()
     */
    list: function (req, res) {
        rental_insuranceModel.find(function (err, rental_insurances) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting rental_insurance.',
                    error: err
                });
            }
            return res.json(rental_insurances);
        });
    },

    /**
     * rental_insuranceController.show()
     */
    show: function (req, res) {
        var id = req.params.id;
        rental_insuranceModel.findOne({_id: id}, function (err, rental_insurance) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting rental_insurance.',
                    error: err
                });
            }
            if (!rental_insurance) {
                return res.status(404).json({
                    message: 'No such rental_insurance'
                });
            }
            return res.json(rental_insurance);
        });
    },

    /**
     * rental_insuranceController.create()
     */
    create: function (req, res) {
        var rental_insurance = new rental_insuranceModel({
			rental_id : req.body.rental_id,
			insurance_id : req.body.insurance_id

        });

        rental_insurance.save(function (err, rental_insurance) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when creating rental_insurance',
                    error: err
                });
            }
            return res.status(201).json(rental_insurance);
        });
    },

    /**
     * rental_insuranceController.update()
     */
    update: function (req, res) {
        var id = req.params.id;
        rental_insuranceModel.findOne({_id: id}, function (err, rental_insurance) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting rental_insurance',
                    error: err
                });
            }
            if (!rental_insurance) {
                return res.status(404).json({
                    message: 'No such rental_insurance'
                });
            }

            rental_insurance.rental_id = req.body.rental_id ? req.body.rental_id : rental_insurance.rental_id;
			rental_insurance.insurance_id = req.body.insurance_id ? req.body.insurance_id : rental_insurance.insurance_id;
			
            rental_insurance.save(function (err, rental_insurance) {
                if (err) {
                    return res.status(500).json({
                        message: 'Error when updating rental_insurance.',
                        error: err
                    });
                }

                return res.json(rental_insurance);
            });
        });
    },

    /**
     * rental_insuranceController.remove()
     */
    remove: function (req, res) {
        var id = req.params.id;
        rental_insuranceModel.findByIdAndRemove(id, function (err, rental_insurance) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when deleting the rental_insurance.',
                    error: err
                });
            }
            return res.status(204).json();
        });
    }
};
