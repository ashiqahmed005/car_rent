var flight_detailModel = require('../models/flight_detailModel.js');

/**
 * flight_detailController.js
 *
 * @description :: Server-side logic for managing flight_details.
 */
module.exports = {

    /**
     * flight_detailController.list()
     */
    list: function (req, res) {
        flight_detailModel.find(function (err, flight_details) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting flight_detail.',
                    error: err
                });
            }
            return res.json(flight_details);
        });
    },

    /**
     * flight_detailController.show()
     */
    show: function (req, res) {
        var id = req.params.id;
        flight_detailModel.findOne({_id: id}, function (err, flight_detail) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting flight_detail.',
                    error: err
                });
            }
            if (!flight_detail) {
                return res.status(404).json({
                    message: 'No such flight_detail'
                });
            }
            return res.json(flight_detail);
        });
    },

    /**
     * flight_detailController.create()
     */
    create: function (req, res) {
        var flight_detail = new flight_detailModel({
			reservation_id : req.body.reservation_id,
			flight_number : req.body.flight_number,
			coming_from : req.body.coming_from,
			expected_arrival_time : req.body.expected_arrival_time

        });

        flight_detail.save(function (err, flight_detail) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when creating flight_detail',
                    error: err
                });
            }
            return res.status(201).json(flight_detail);
        });
    },

    /**
     * flight_detailController.update()
     */
    update: function (req, res) {
        var id = req.params.id;
        flight_detailModel.findOne({_id: id}, function (err, flight_detail) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting flight_detail',
                    error: err
                });
            }
            if (!flight_detail) {
                return res.status(404).json({
                    message: 'No such flight_detail'
                });
            }

            flight_detail.reservation_id = req.body.reservation_id ? req.body.reservation_id : flight_detail.reservation_id;
			flight_detail.flight_number = req.body.flight_number ? req.body.flight_number : flight_detail.flight_number;
			flight_detail.coming_from = req.body.coming_from ? req.body.coming_from : flight_detail.coming_from;
			flight_detail.expected_arrival_time = req.body.expected_arrival_time ? req.body.expected_arrival_time : flight_detail.expected_arrival_time;
			
            flight_detail.save(function (err, flight_detail) {
                if (err) {
                    return res.status(500).json({
                        message: 'Error when updating flight_detail.',
                        error: err
                    });
                }

                return res.json(flight_detail);
            });
        });
    },

    /**
     * flight_detailController.remove()
     */
    remove: function (req, res) {
        var id = req.params.id;
        flight_detailModel.findByIdAndRemove(id, function (err, flight_detail) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when deleting the flight_detail.',
                    error: err
                });
            }
            return res.status(204).json();
        });
    }
};
