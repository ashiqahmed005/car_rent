var equipmentModel = require('../models/equipmentModel.js');

/**
 * equipmentController.js
 *
 * @description :: Server-side logic for managing equipments.
 */
module.exports = {

    /**
     * equipmentController.list()
     */
    list: function (req, res) {
        equipmentModel.find(function (err, equipments) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting equipment.',
                    error: err
                });
            }
            return res.json(equipments);
        });
    },

    /**
     * equipmentController.show()
     */
    show: function (req, res) {
        var id = req.params.id;
        equipmentModel.findOne({_id: id}, function (err, equipment) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting equipment.',
                    error: err
                });
            }
            if (!equipment) {
                return res.status(404).json({
                    message: 'No such equipment'
                });
            }
            return res.json(equipment);
        });
    },

    /**
     * equipmentController.create()
     */
    create: function (req, res) {
        var equipment = new equipmentModel({
			name : req.body.name,
			equipment_category_id : req.body.equipment_category_id,
			current_location_id : req.body.current_location_id

        });

        equipment.save(function (err, equipment) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when creating equipment',
                    error: err
                });
            }
            return res.status(201).json(equipment);
        });
    },

    /**
     * equipmentController.update()
     */
    update: function (req, res) {
        var id = req.params.id;
        equipmentModel.findOne({_id: id}, function (err, equipment) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting equipment',
                    error: err
                });
            }
            if (!equipment) {
                return res.status(404).json({
                    message: 'No such equipment'
                });
            }

            equipment.name = req.body.name ? req.body.name : equipment.name;
			equipment.equipment_category_id = req.body.equipment_category_id ? req.body.equipment_category_id : equipment.equipment_category_id;
			equipment.current_location_id = req.body.current_location_id ? req.body.current_location_id : equipment.current_location_id;
			
            equipment.save(function (err, equipment) {
                if (err) {
                    return res.status(500).json({
                        message: 'Error when updating equipment.',
                        error: err
                    });
                }

                return res.json(equipment);
            });
        });
    },

    /**
     * equipmentController.remove()
     */
    remove: function (req, res) {
        var id = req.params.id;
        equipmentModel.findByIdAndRemove(id, function (err, equipment) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when deleting the equipment.',
                    error: err
                });
            }
            return res.status(204).json();
        });
    }
};
