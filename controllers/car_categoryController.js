var car_categoryModel = require('../models/car_categoryModel.js');

/**
 * car_categoryController.js
 *
 * @description :: Server-side logic for managing car_categorys.
 */
module.exports = {

    /**
     * car_categoryController.list()
     */
    list: function (req, res) {
        car_categoryModel.find(function (err, car_categorys) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting car_category.',
                    error: err
                });
            }
            return res.json(car_categorys);
        });
    },

    /**
     * car_categoryController.show()
     */
    show: function (req, res) {
        var id = req.params.id;
        car_categoryModel.findOne({_id: id}, function (err, car_category) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting car_category.',
                    error: err
                });
            }
            if (!car_category) {
                return res.status(404).json({
                    message: 'No such car_category'
                });
            }
            return res.json(car_category);
        });
    },

    /**
     * car_categoryController.create()
     */
    create: function (req, res) {
        var car_category = new car_categoryModel({
			name : req.body.name,
			rental_value : req.body.rental_value

        });

        car_category.save(function (err, car_category) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when creating car_category',
                    error: err
                });
            }
            return res.status(201).json(car_category);
        });
    },

    /**
     * car_categoryController.update()
     */
    update: function (req, res) {
        var id = req.params.id;
        car_categoryModel.findOne({_id: id}, function (err, car_category) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting car_category',
                    error: err
                });
            }
            if (!car_category) {
                return res.status(404).json({
                    message: 'No such car_category'
                });
            }

            car_category.name = req.body.name ? req.body.name : car_category.name;
			car_category.rental_value = req.body.rental_value ? req.body.rental_value : car_category.rental_value;
			
            car_category.save(function (err, car_category) {
                if (err) {
                    return res.status(500).json({
                        message: 'Error when updating car_category.',
                        error: err
                    });
                }

                return res.json(car_category);
            });
        });
    },

    /**
     * car_categoryController.remove()
     */
    remove: function (req, res) {
        var id = req.params.id;
        car_categoryModel.findByIdAndRemove(id, function (err, car_category) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when deleting the car_category.',
                    error: err
                });
            }
            return res.status(204).json();
        });
    }
};
