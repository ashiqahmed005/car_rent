var express = require('express');
var router = express.Router();
var car_equipmentController = require('../controllers/car_equipmentController.js');

/*
 * GET
 */
router.get('/', car_equipmentController.list);

/*
 * GET
 */
router.get('/:id', car_equipmentController.show);

/*
 * POST
 */
router.post('/', car_equipmentController.create);

/*
 * PUT
 */
router.put('/:id', car_equipmentController.update);

/*
 * DELETE
 */
router.delete('/:id', car_equipmentController.remove);

module.exports = router;
