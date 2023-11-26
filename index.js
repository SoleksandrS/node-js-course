const express = require('express');
const app = express();

const products = [
  { id: 1, name: 'Product 1', brand: 'Brand A' },
  { id: 2, name: 'Product 2', brand: 'Brand B' },
  { id: 3, name: 'Product 3', brand: 'Brand A' }
];

app.get('/', (req, res) => {
  res.send('response for GET request');
});

app.get('/products/:id', (req, res) => {
  const { id } = req.params;

  const product = products.find((obj) => `${obj.id}` === id);

  if (product) res.json(product);
  else res.send('Not found product');
});

app.listen(3000, () => {
  console.log('Server listening on port http://localhost:3000/');
});
