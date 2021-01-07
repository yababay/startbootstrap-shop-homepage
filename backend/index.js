const express = require('express'),
  app = express(),
  cors = require('cors'),
  bodyParser = require('body-parser');

const productsRouter = require('./routes/products');
const ordersRouter = require('./routes/orders');

var server = {
  port: 4040
};

app.use(cors())
app.use(bodyParser.json());
app.use('/products', productsRouter);
app.use('/orders',   ordersRouter);

app.listen( server.port , () => console.log(`Server started, listening port: ${server.port}`));
