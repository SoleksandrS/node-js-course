const express = require('express');
const { logRequest } = require('./middleware');
const { errorResponder } = require('./error.middleware');
const productRoutes = require('./product.routes');

const app = express();
const PORT = 3000;

app.use(logRequest);
app.use(productRoutes);
app.use(errorResponder);

app.listen(PORT, () => {
  console.log(`Server listening at http://localhost:${PORT}`);
})
