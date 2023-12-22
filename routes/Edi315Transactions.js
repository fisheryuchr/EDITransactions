const edi315transactionsReportService = require('../services/Edi315TransactionsReportService.js');

const edi315transactionsRoute = (app) => {
  app.get('/edi315transactions', (req, res) => {
    edi315transactionsReportService(req)
      .then((result) => res.send(result));
  });
}

module.exports = edi315transactionsRoute;
