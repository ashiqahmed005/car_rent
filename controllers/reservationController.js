var reservationModel = require('../models/reservationModel.js');

/**
 * reservationController.js
 *
 * @description :: Server-side logic for managing reservations.
 */
module.exports = {

    /**
     * reservationController.list()
     */
    list: function (req, res) {
        reservationModel.find(function (err, reservations) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting reservation.',
                    error: err
                });
            }
            return res.json(reservations);
        });
    },

    /**
     * reservationController.show()
     */
    show: function (req, res) {
        var id = req.params.id;
        reservationModel.findOne({_id: id}, function (err, reservation) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting reservation.',
                    error: err
                });
            }
            if (!reservation) {
                return res.status(404).json({
                    message: 'No such reservation'
                });
            }
            return res.json(reservation);
        });
    },

    /**
     * reservationController.create()
     */
    create: function (req, res) {
        var reservation = new reservationModel({
			pick_up_location_id : req.body.pick_up_location_id,
			drop_off_location_id : req.body.drop_off_location_id,
			car_category_id : req.body.car_category_id,
			customer_id : req.body.customer_id

        });

        reservation.save(function (err, reservation) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when creating reservation',
                    error: err
                });
            }
            return res.status(201).json(reservation);
        });
    },

    /**
     * reservationController.update()
     */
    update: function (req, res) {
        var id = req.params.id;
        reservationModel.findOne({_id: id}, function (err, reservation) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting reservation',
                    error: err
                });
            }
            if (!reservation) {
                return res.status(404).json({
                    message: 'No such reservation'
                });
            }

            reservation.pick_up_location_id = req.body.pick_up_location_id ? req.body.pick_up_location_id : reservation.pick_up_location_id;
			reservation.drop_off_location_id = req.body.drop_off_location_id ? req.body.drop_off_location_id : reservation.drop_off_location_id;
			reservation.car_category_id = req.body.car_category_id ? req.body.car_category_id : reservation.car_category_id;
			reservation.customer_id = req.body.customer_id ? req.body.customer_id : reservation.customer_id;
			
            reservation.save(function (err, reservation) {
                if (err) {
                    return res.status(500).json({
                        message: 'Error when updating reservation.',
                        error: err
                    });
                }

                return res.json(reservation);
            });
        });
    },

    /**
     * reservationController.remove()
     */
    remove: function (req, res) {
        var id = req.params.id;
        reservationModel.findByIdAndRemove(id, function (err, reservation) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when deleting the reservation.',
                    error: err
                });
            }
            return res.status(204).json();
        });
    }
};
