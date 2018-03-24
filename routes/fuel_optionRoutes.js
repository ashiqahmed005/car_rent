var express = require('express');
var router = express.Router();
var fuel_optionController = require('../controllers/fuel_optionController.js');

/*
 * GET
 */
router.get('/', fuel_optionController.list);

/*
 * GET
 */
router.get('/:id', fuel_optionController.show);

/*
 * POST
 */
router.post('/', fuel_optionController.create);

/*
 * PUT
 */
router.put('/:id', fuel_optionController.update);

/*
 * DELETE
 */
router.delete('/:id', fuel_optionController.remove);

module.exports = router;
