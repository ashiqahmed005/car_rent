var car_equipmentModel = require('../models/car_equipmentModel.js');

/**
 * car_equipmentController.js
 *
 * @description :: Server-side logic for managing car_equipments.
 */
module.exports = {

    /**
     * car_equipmentController.list()
     */
    list: function (req, res) {
        car_equipmentModel.find(function (err, car_equipments) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting car_equipment.',
                    error: err
                });
            }
            return res.json(car_equipments);
        });
    },

    /**
     * car_equipmentController.show()
     */
    show: function (req, res) {
        var id = req.params.id;
        car_equipmentModel.findOne({_id: id}, function (err, car_equipment) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting car_equipment.',
                    error: err
                });
            }
            if (!car_equipment) {
                return res.status(404).json({
                    message: 'No such car_equipment'
                });
            }
            return res.json(car_equipment);
        });
    },

    /**
     * car_equipmentController.create()
     */
    create: function (req, res) {
        var car_equipment = new car_equipmentModel({
			equipment_id : req.body.equipment_id,
			car_id : req.body.car_id,
			start_date : req.body.start_date,
			end_date : req.body.end_date

        });

        car_equipment.save(function (err, car_equipment) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when creating car_equipment',
                    error: err
                });
            }
            return res.status(201).json(car_equipment);
        });
    },

    /**
     * car_equipmentController.update()
     */
    update: function (req, res) {
        var id = req.params.id;
        car_equipmentModel.findOne({_id: id}, function (err, car_equipment) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting car_equipment',
                    error: err
                });
            }
            if (!car_equipment) {
                return res.status(404).json({
                    message: 'No such car_equipment'
                });
            }

            car_equipment.equipment_id = req.body.equipment_id ? req.body.equipment_id : car_equipment.equipment_id;
			car_equipment.car_id = req.body.car_id ? req.body.car_id : car_equipment.car_id;
			car_equipment.start_date = req.body.start_date ? req.body.start_date : car_equipment.start_date;
			car_equipment.end_date = req.body.end_date ? req.body.end_date : car_equipment.end_date;
			
            car_equipment.save(function (err, car_equipment) {
                if (err) {
                    return res.status(500).json({
                        message: 'Error when updating car_equipment.',
                        error: err
                    });
                }

                return res.json(car_equipment);
            });
        });
    },

    /**
     * car_equipmentController.remove()
     */
    remove: function (req, res) {
        var id = req.params.id;
        car_equipmentModel.findByIdAndRemove(id, function (err, car_equipment) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when deleting the car_equipment.',
                    error: err
                });
            }
            return res.status(204).json();
        });
    }
};
