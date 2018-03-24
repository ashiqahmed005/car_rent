var express = require('express');
var router = express.Router();
var rental_invoiceController = require('../controllers/rental_invoiceController.js');

/*
 * GET
 */
router.get('/', rental_invoiceController.list);

/*
 * GET
 */
router.get('/:id', rental_invoiceController.show);

/*
 * POST
 */
router.post('/', rental_invoiceController.create);

/*
 * PUT
 */
router.put('/:id', rental_invoiceController.update);

/*
 * DELETE
 */
router.delete('/:id', rental_invoiceController.remove);

module.exports = router;
