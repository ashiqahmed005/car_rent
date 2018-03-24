var locationModel = require('../models/locationModel.js');

/**
 * locationController.js
 *
 * @description :: Server-side logic for managing locations.
 */
module.exports = {

    /**
     * locationController.list()
     */
    list: function (req, res) {
        locationModel.find(function (err, locations) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting location.',
                    error: err
                });
            }
            return res.json(locations);
        });
    },

    /**
     * locationController.show()
     */
    show: function (req, res) {
        var id = req.params.id;
        locationModel.findOne({_id: id}, function (err, location) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting location.',
                    error: err
                });
            }
            if (!location) {
                return res.status(404).json({
                    message: 'No such location'
                });
            }
            return res.json(location);
        });
    },

    /**
     * locationController.create()
     */
    create: function (req, res) {
        var location = new locationModel({
			street_adress : req.body.street_adress,
			city : req.body.city,
			state : req.body.state,
			country : req.body.country,
			zip : req.body.zip

        });

        location.save(function (err, location) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when creating location',
                    error: err
                });
            }
            return res.status(201).json(location);
        });
    },

    /**
     * locationController.update()
     */
    update: function (req, res) {
        var id = req.params.id;
        locationModel.findOne({_id: id}, function (err, location) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting location',
                    error: err
                });
            }
            if (!location) {
                return res.status(404).json({
                    message: 'No such location'
                });
            }

            location.street_adress = req.body.street_adress ? req.body.street_adress : location.street_adress;
			location.city = req.body.city ? req.body.city : location.city;
			location.state = req.body.state ? req.body.state : location.state;
			location.country = req.body.country ? req.body.country : location.country;
			location.zip = req.body.zip ? req.body.zip : location.zip;
			
            location.save(function (err, location) {
                if (err) {
                    return res.status(500).json({
                        message: 'Error when updating location.',
                        error: err
                    });
                }

                return res.json(location);
            });
        });
    },

    /**
     * locationController.remove()
     */
    remove: function (req, res) {
        var id = req.params.id;
        locationModel.findByIdAndRemove(id, function (err, location) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when deleting the location.',
                    error: err
                });
            }
            return res.status(204).json();
        });
    }
};
