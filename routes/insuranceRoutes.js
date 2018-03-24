var express = require('express');
var router = express.Router();
var insuranceController = require('../controllers/insuranceController.js');

/*
 * GET
 */
router.get('/', insuranceController.list);

/*
 * GET
 */
router.get('/:id', insuranceController.show);

/*
 * POST
 */
router.post('/', insuranceController.create);

/*
 * PUT
 */
router.put('/:id', insuranceController.update);

/*
 * DELETE
 */
router.delete('/:id', insuranceController.remove);

module.exports = router;
