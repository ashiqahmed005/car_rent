var express = require('express');
var router = express.Router();
var equipment_categoryController = require('../controllers/equipment_categoryController.js');

/*
 * GET
 */
router.get('/', equipment_categoryController.list);

/*
 * GET
 */
router.get('/:id', equipment_categoryController.show);

/*
 * POST
 */
router.post('/', equipment_categoryController.create);

/*
 * PUT
 */
router.put('/:id', equipment_categoryController.update);

/*
 * DELETE
 */
router.delete('/:id', equipment_categoryController.remove);

module.exports = router;
