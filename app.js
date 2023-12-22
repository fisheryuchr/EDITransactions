const express = require('express')
const app = express()
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger.json');
const edi315transactionsRoute = require('./routes/Edi315Transactions.js');

const port = 3000

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.get('/', (req, res) => {
  res.send('Healthy!')
});

edi315transactionsRoute(app);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

module.exports = app;
