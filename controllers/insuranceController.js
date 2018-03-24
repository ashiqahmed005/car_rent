var insuranceModel = require('../models/insuranceModel.js');

/**
 * insuranceController.js
 *
 * @description :: Server-side logic for managing insurances.
 */
module.exports = {

    /**
     * insuranceController.list()
     */
    list: function (req, res) {
        insuranceModel.find(function (err, insurances) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting insurance.',
                    error: err
                });
            }
            return res.json(insurances);
        });
    },

    /**
     * insuranceController.show()
     */
    show: function (req, res) {
        var id = req.params.id;
        insuranceModel.findOne({_id: id}, function (err, insurance) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting insurance.',
                    error: err
                });
            }
            if (!insurance) {
                return res.status(404).json({
                    message: 'No such insurance'
                });
            }
            return res.json(insurance);
        });
    },

    /**
     * insuranceController.create()
     */
    create: function (req, res) {
        var insurance = new insuranceModel({
			name : req.body.name,
			description : req.body.description,
			policy : req.body.policy,
			cost : req.body.cost

        });

        insurance.save(function (err, insurance) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when creating insurance',
                    error: err
                });
            }
            return res.status(201).json(insurance);
        });
    },

    /**
     * insuranceController.update()
     */
    update: function (req, res) {
        var id = req.params.id;
        insuranceModel.findOne({_id: id}, function (err, insurance) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting insurance',
                    error: err
                });
            }
            if (!insurance) {
                return res.status(404).json({
                    message: 'No such insurance'
                });
            }

            insurance.name = req.body.name ? req.body.name : insurance.name;
			insurance.description = req.body.description ? req.body.description : insurance.description;
			insurance.policy = req.body.policy ? req.body.policy : insurance.policy;
			insurance.cost = req.body.cost ? req.body.cost : insurance.cost;
			
            insurance.save(function (err, insurance) {
                if (err) {
                    return res.status(500).json({
                        message: 'Error when updating insurance.',
                        error: err
                    });
                }

                return res.json(insurance);
            });
        });
    },

    /**
     * insuranceController.remove()
     */
    remove: function (req, res) {
        var id = req.params.id;
        insuranceModel.findByIdAndRemove(id, function (err, insurance) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when deleting the insurance.',
                    error: err
                });
            }
            return res.status(204).json();
        });
    }
};
