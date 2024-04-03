const express = require('express');
const router = express.Router();
const productController = require('./controllers');

router.get('/:category/products', productController.getTopProds);
router.get('/:category/products/:productid', productController.getProdDetail);

module.exports = router;