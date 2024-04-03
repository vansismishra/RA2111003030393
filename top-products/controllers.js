const fetchTopProducts = require('../services/fetchTopProducts');
const productsDB = require('../data/products');

const getTopProds = async (req, res) => {
    const { category } = req.params;
    const { n, sortBy } = req.query;
    const topN = parseInt(n) || 10;
    const sortingCriteria = sortBy || 'rating';

    let products;
    try {
        if (!productsDB[category]) {
            productsDB[category] = {};
        }
        if (!productsDB[category][sortingCriteria]) {
            products = await fetchTopProducts(category, topN);
            productsDB[category][sortingCriteria] = products;
        } else {
            products = productsDB[category][sortingCriteria];
        }
        products.sort((a, b) => {
            if (sortingCriteria === 'price') {
                return a[sortingCriteria] - b[sortingCriteria];
            } else if (sortingCriteria === 'discount') {
                return b[sortingCriteria] - a[sortingCriteria];
            } else {
                return b[sortingCriteria] - a[sortingCriteria];
            }
        });

        res.json(products.slice(0, topN));
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal server error' });
    }
};

const getProdDetail = require('./middlewares');

module.exports = {
    getTopProds,
    getProdDetail
};
