var express = require('express');
var router = express.Router();
var flight_detailController = require('../controllers/flight_detailController.js');

/*
 * GET
 */
router.get('/', flight_detailController.list);

/*
 * GET
 */
router.get('/:id', flight_detailController.show);

/*
 * POST
 */
router.post('/', flight_detailController.create);

/*
 * PUT
 */
router.put('/:id', flight_detailController.update);

/*
 * DELETE
 */
router.delete('/:id', flight_detailController.remove);

module.exports = router;
