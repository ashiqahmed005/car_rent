var rentalModel = require('../models/rentalModel.js');

/**
 * rentalController.js
 *
 * @description :: Server-side logic for managing rentals.
 */
module.exports = {

    /**
     * rentalController.list()
     */
    list: function (req, res) {
        rentalModel.find(function (err, rentals) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting rental.',
                    error: err
                });
            }
            return res.json(rentals);
        });
    },

    /**
     * rentalController.show()
     */
    show: function (req, res) {
        var id = req.params.id;
        rentalModel.findOne({_id: id}, function (err, rental) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting rental.',
                    error: err
                });
            }
            if (!rental) {
                return res.status(404).json({
                    message: 'No such rental'
                });
            }
            return res.json(rental);
        });
    },

    /**
     * rentalController.create()
     */
    create: function (req, res) {
        var rental = new rentalModel({
			customer_id : req.body.customer_id,
			car_id : req.body.car_id,
			pick_up_location_id : req.body.pick_up_location_id,
			drop_off_location_id : req.body.drop_off_location_id,
			start_date : req.body.start_date,
			end_date : req.body.end_date,
			remarks : req.body.remarks,
			fuel_option_id : req.body.fuel_option_id

        });

        rental.save(function (err, rental) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when creating rental',
                    error: err
                });
            }
            return res.status(201).json(rental);
        });
    },

    /**
     * rentalController.update()
     */
    update: function (req, res) {
        var id = req.params.id;
        rentalModel.findOne({_id: id}, function (err, rental) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting rental',
                    error: err
                });
            }
            if (!rental) {
                return res.status(404).json({
                    message: 'No such rental'
                });
            }

            rental.customer_id = req.body.customer_id ? req.body.customer_id : rental.customer_id;
			rental.car_id = req.body.car_id ? req.body.car_id : rental.car_id;
			rental.pick_up_location_id = req.body.pick_up_location_id ? req.body.pick_up_location_id : rental.pick_up_location_id;
			rental.drop_off_location_id = req.body.drop_off_location_id ? req.body.drop_off_location_id : rental.drop_off_location_id;
			rental.start_date = req.body.start_date ? req.body.start_date : rental.start_date;
			rental.end_date = req.body.end_date ? req.body.end_date : rental.end_date;
			rental.remarks = req.body.remarks ? req.body.remarks : rental.remarks;
			rental.fuel_option_id = req.body.fuel_option_id ? req.body.fuel_option_id : rental.fuel_option_id;
			
            rental.save(function (err, rental) {
                if (err) {
                    return res.status(500).json({
                        message: 'Error when updating rental.',
                        error: err
                    });
                }

                return res.json(rental);
            });
        });
    },

    /**
     * rentalController.remove()
     */
    remove: function (req, res) {
        var id = req.params.id;
        rentalModel.findByIdAndRemove(id, function (err, rental) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when deleting the rental.',
                    error: err
                });
            }
            return res.status(204).json();
        });
    }
};
