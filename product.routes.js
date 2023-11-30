const express = require('express');
const products = require('./products');
const { blockSpecialBrand } = require('./middleware');

const router = express.Router();

router.get('/products', blockSpecialBrand, (req, res) => {
  const { name, brand } = req.query;

  let filteredProducts = [...products];

  if (name) {
    filteredProducts = filteredProducts.filter((obj) => obj.name === name);
  }
  if (brand) {
    filteredProducts = filteredProducts.filter((obj) => obj.brand === brand);
  }

  res.json(filteredProducts);
});

router.get('/products/:id', (req, res) => {
  const { id } = req.params;

  const product = products.find((obj) => `${obj.id}` === id);

  if (product) res.json(product);
  else res.send('Not found product');
});

router.get('/productswitherror', (req, res) => {
  let err = new Error("processing error ");
  err.statusCode = 400;
  throw err;
});

module.exports = router;
