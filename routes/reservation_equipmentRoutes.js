var express = require('express');
var router = express.Router();
var reservation_equipmentController = require('../controllers/reservation_equipmentController.js');

/*
 * GET
 */
router.get('/', reservation_equipmentController.list);

/*
 * GET
 */
router.get('/:id', reservation_equipmentController.show);

/*
 * POST
 */
router.post('/', reservation_equipmentController.create);

/*
 * PUT
 */
router.put('/:id', reservation_equipmentController.update);

/*
 * DELETE
 */
router.delete('/:id', reservation_equipmentController.remove);

module.exports = router;
