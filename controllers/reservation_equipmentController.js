var reservation_equipmentModel = require('../models/reservation_equipmentModel.js');

/**
 * reservation_equipmentController.js
 *
 * @description :: Server-side logic for managing reservation_equipments.
 */
module.exports = {

    /**
     * reservation_equipmentController.list()
     */
    list: function (req, res) {
        reservation_equipmentModel.find(function (err, reservation_equipments) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting reservation_equipment.',
                    error: err
                });
            }
            return res.json(reservation_equipments);
        });
    },

    /**
     * reservation_equipmentController.show()
     */
    show: function (req, res) {
        var id = req.params.id;
        reservation_equipmentModel.findOne({_id: id}, function (err, reservation_equipment) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting reservation_equipment.',
                    error: err
                });
            }
            if (!reservation_equipment) {
                return res.status(404).json({
                    message: 'No such reservation_equipment'
                });
            }
            return res.json(reservation_equipment);
        });
    },

    /**
     * reservation_equipmentController.create()
     */
    create: function (req, res) {
        var reservation_equipment = new reservation_equipmentModel({
			reservation_id : req.body.reservation_id,
			equipment_category_id : req.body.equipment_category_id

        });

        reservation_equipment.save(function (err, reservation_equipment) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when creating reservation_equipment',
                    error: err
                });
            }
            return res.status(201).json(reservation_equipment);
        });
    },

    /**
     * reservation_equipmentController.update()
     */
    update: function (req, res) {
        var id = req.params.id;
        reservation_equipmentModel.findOne({_id: id}, function (err, reservation_equipment) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting reservation_equipment',
                    error: err
                });
            }
            if (!reservation_equipment) {
                return res.status(404).json({
                    message: 'No such reservation_equipment'
                });
            }

            reservation_equipment.reservation_id = req.body.reservation_id ? req.body.reservation_id : reservation_equipment.reservation_id;
			reservation_equipment.equipment_category_id = req.body.equipment_category_id ? req.body.equipment_category_id : reservation_equipment.equipment_category_id;
			
            reservation_equipment.save(function (err, reservation_equipment) {
                if (err) {
                    return res.status(500).json({
                        message: 'Error when updating reservation_equipment.',
                        error: err
                    });
                }

                return res.json(reservation_equipment);
            });
        });
    },

    /**
     * reservation_equipmentController.remove()
     */
    remove: function (req, res) {
        var id = req.params.id;
        reservation_equipmentModel.findByIdAndRemove(id, function (err, reservation_equipment) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when deleting the reservation_equipment.',
                    error: err
                });
            }
            return res.status(204).json();
        });
    }
};
