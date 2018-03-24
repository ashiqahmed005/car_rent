var carModel = require('../models/carModel.js');

/**
 * carController.js
 *
 * @description :: Server-side logic for managing cars.
 */
module.exports = {

    /**
     * carController.list()
     */
    list: function (req, res) {
        carModel.find(function (err, cars) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting car.',
                    error: err
                });
            }
            return res.json(cars);
        });
    },

    /**
     * carController.show()
     */
    show: function (req, res) {
        var id = req.params.id;
        carModel.findOne({_id: id}, function (err, car) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting car.',
                    error: err
                });
            }
            if (!car) {
                return res.status(404).json({
                    message: 'No such car'
                });
            }
            return res.json(car);
        });
    },

    /**
     * carController.create()
     */
    create: function (req, res) {
        var car = new carModel({
			car_category_id : req.body.car_category_id,
			brand : req.body.brand,
			model : req.body.model,
			production_year : req.body.production_year,
			mileage : req.body.mileage,
			color : req.body.color,
			current_location_id : req.body.current_location_id

        });

        car.save(function (err, car) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when creating car',
                    error: err
                });
            }
            return res.status(201).json(car);
        });
    },

    /**
     * carController.update()
     */
    update: function (req, res) {
        var id = req.params.id;
        carModel.findOne({_id: id}, function (err, car) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting car',
                    error: err
                });
            }
            if (!car) {
                return res.status(404).json({
                    message: 'No such car'
                });
            }

            car.car_category_id = req.body.car_category_id ? req.body.car_category_id : car.car_category_id;
			car.brand = req.body.brand ? req.body.brand : car.brand;
			car.model = req.body.model ? req.body.model : car.model;
			car.production_year = req.body.production_year ? req.body.production_year : car.production_year;
			car.mileage = req.body.mileage ? req.body.mileage : car.mileage;
			car.color = req.body.color ? req.body.color : car.color;
			car.current_location_id = req.body.current_location_id ? req.body.current_location_id : car.current_location_id;
			
            car.save(function (err, car) {
                if (err) {
                    return res.status(500).json({
                        message: 'Error when updating car.',
                        error: err
                    });
                }

                return res.json(car);
            });
        });
    },

    /**
     * carController.remove()
     */
    remove: function (req, res) {
        var id = req.params.id;
        carModel.findByIdAndRemove(id, function (err, car) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when deleting the car.',
                    error: err
                });
            }
            return res.status(204).json();
        });
    }
};
