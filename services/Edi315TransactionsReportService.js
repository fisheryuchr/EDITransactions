const ediTransactionsClient = require('../Infrastructions/EdiTransactionsClient');
const writeFile = require('../common/WriteFile');

const edi315transactionsReportService = (req) => {
  return ediTransactionsClient().then((response) => {
    writeFile('edi315transactions.json', JSON.stringify(response, null, 4));
    return JSON.stringify(response, null, 4);
  });
};


module.exports = edi315transactionsReportService;