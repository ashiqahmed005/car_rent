var equipment_categoryModel = require('../models/equipment_categoryModel.js');

/**
 * equipment_categoryController.js
 *
 * @description :: Server-side logic for managing equipment_categorys.
 */
module.exports = {

    /**
     * equipment_categoryController.list()
     */
    list: function (req, res) {
        equipment_categoryModel.find(function (err, equipment_categorys) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting equipment_category.',
                    error: err
                });
            }
            return res.json(equipment_categorys);
        });
    },

    /**
     * equipment_categoryController.show()
     */
    show: function (req, res) {
        var id = req.params.id;
        equipment_categoryModel.findOne({_id: id}, function (err, equipment_category) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting equipment_category.',
                    error: err
                });
            }
            if (!equipment_category) {
                return res.status(404).json({
                    message: 'No such equipment_category'
                });
            }
            return res.json(equipment_category);
        });
    },

    /**
     * equipment_categoryController.create()
     */
    create: function (req, res) {
        var equipment_category = new equipment_categoryModel({
			name : req.body.name,
			rental_value : req.body.rental_value

        });

        equipment_category.save(function (err, equipment_category) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when creating equipment_category',
                    error: err
                });
            }
            return res.status(201).json(equipment_category);
        });
    },

    /**
     * equipment_categoryController.update()
     */
    update: function (req, res) {
        var id = req.params.id;
        equipment_categoryModel.findOne({_id: id}, function (err, equipment_category) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting equipment_category',
                    error: err
                });
            }
            if (!equipment_category) {
                return res.status(404).json({
                    message: 'No such equipment_category'
                });
            }

            equipment_category.name = req.body.name ? req.body.name : equipment_category.name;
			equipment_category.rental_value = req.body.rental_value ? req.body.rental_value : equipment_category.rental_value;
			
            equipment_category.save(function (err, equipment_category) {
                if (err) {
                    return res.status(500).json({
                        message: 'Error when updating equipment_category.',
                        error: err
                    });
                }

                return res.json(equipment_category);
            });
        });
    },

    /**
     * equipment_categoryController.remove()
     */
    remove: function (req, res) {
        var id = req.params.id;
        equipment_categoryModel.findByIdAndRemove(id, function (err, equipment_category) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when deleting the equipment_category.',
                    error: err
                });
            }
            return res.status(204).json();
        });
    }
};
