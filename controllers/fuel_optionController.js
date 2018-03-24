var fuel_optionModel = require('../models/fuel_optionModel.js');

/**
 * fuel_optionController.js
 *
 * @description :: Server-side logic for managing fuel_options.
 */
module.exports = {

    /**
     * fuel_optionController.list()
     */
    list: function (req, res) {
        fuel_optionModel.find(function (err, fuel_options) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting fuel_option.',
                    error: err
                });
            }
            return res.json(fuel_options);
        });
    },

    /**
     * fuel_optionController.show()
     */
    show: function (req, res) {
        var id = req.params.id;
        fuel_optionModel.findOne({_id: id}, function (err, fuel_option) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting fuel_option.',
                    error: err
                });
            }
            if (!fuel_option) {
                return res.status(404).json({
                    message: 'No such fuel_option'
                });
            }
            return res.json(fuel_option);
        });
    },

    /**
     * fuel_optionController.create()
     */
    create: function (req, res) {
        var fuel_option = new fuel_optionModel({
			description : req.body.description

        });

        fuel_option.save(function (err, fuel_option) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when creating fuel_option',
                    error: err
                });
            }
            return res.status(201).json(fuel_option);
        });
    },

    /**
     * fuel_optionController.update()
     */
    update: function (req, res) {
        var id = req.params.id;
        fuel_optionModel.findOne({_id: id}, function (err, fuel_option) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting fuel_option',
                    error: err
                });
            }
            if (!fuel_option) {
                return res.status(404).json({
                    message: 'No such fuel_option'
                });
            }

            fuel_option.description = req.body.description ? req.body.description : fuel_option.description;
			
            fuel_option.save(function (err, fuel_option) {
                if (err) {
                    return res.status(500).json({
                        message: 'Error when updating fuel_option.',
                        error: err
                    });
                }

                return res.json(fuel_option);
            });
        });
    },

    /**
     * fuel_optionController.remove()
     */
    remove: function (req, res) {
        var id = req.params.id;
        fuel_optionModel.findByIdAndRemove(id, function (err, fuel_option) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when deleting the fuel_option.',
                    error: err
                });
            }
            return res.status(204).json();
        });
    }
};
