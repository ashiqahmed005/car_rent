var express = require('express');
var router = express.Router();
var rental_insuranceController = require('../controllers/rental_insuranceController.js');

/*
 * GET
 */
router.get('/', rental_insuranceController.list);

/*
 * GET
 */
router.get('/:id', rental_insuranceController.show);

/*
 * POST
 */
router.post('/', rental_insuranceController.create);

/*
 * PUT
 */
router.put('/:id', rental_insuranceController.update);

/*
 * DELETE
 */
router.delete('/:id', rental_insuranceController.remove);

module.exports = router;
