const express = require('express');
const bodyParser = require('body-parser');
const { logRequest } = require('./middleware');
const { errorResponder } = require('./error.middleware');
const userRouter = require('./user/user.router');
const productRouter = require('./product/product.router');

const app = express();
const PORT = 3000;

app.use(bodyParser.json());
app.use(logRequest);
app.use(userRouter);
app.use(productRouter);
app.use(errorResponder);

app.listen(PORT, () => {
  console.log(`Server listening at http://localhost:${PORT}`);
})
