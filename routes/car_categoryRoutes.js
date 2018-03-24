var express = require('express');
var router = express.Router();
var car_categoryController = require('../controllers/car_categoryController.js');

/*
 * GET
 */
router.get('/', car_categoryController.list);

/*
 * GET
 */
router.get('/:id', car_categoryController.show);

/*
 * POST
 */
router.post('/', car_categoryController.create);

/*
 * PUT
 */
router.put('/:id', car_categoryController.update);

/*
 * DELETE
 */
router.delete('/:id', car_categoryController.remove);

module.exports = router;
