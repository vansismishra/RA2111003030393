const products = require('../data/products');

const getProdDetail = (req, res, next) => {
    const { category, productid } = req.params;
    if(products[category] && products[category][productid]) {
        res.json(products[category][productid]);
    }
    else {
        res.status(404).json({ error: 'Product Not Found'});
    }
};

module.exports = getProdDetail;