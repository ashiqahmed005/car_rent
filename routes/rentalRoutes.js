var express = require('express');
var router = express.Router();
var rentalController = require('../controllers/rentalController.js');

/*
 * GET
 */
router.get('/', rentalController.list);

/*
 * GET
 */
router.get('/:id', rentalController.show);

/*
 * POST
 */
router.post('/', rentalController.create);

/*
 * PUT
 */
router.put('/:id', rentalController.update);

/*
 * DELETE
 */
router.delete('/:id', rentalController.remove);

module.exports = router;
