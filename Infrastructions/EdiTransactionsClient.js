const configs = require('../configs');
const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));

const serviceBaseUrl = configs.ediInboundOrchestratorApiUrl;

const ediTransactionsClient = () => {
  return fetch(`${serviceBaseUrl}/Inbound/adv-search`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      "documentType": "OceanConsolidation",
      "statusCode": " ",
      "keywords": "",
      "submittedDateFrom": "2023-11-14T16:01:00.000Z",
      "submittedDateTo": "2023-12-21T16:00:00.000Z",
      "pageSize": 1000,
      "pageNumber": 0,
    }),
  }).then((response) => {
    return response.json();
  }).then((json) => {
    return json;
  });;
};

module.exports = ediTransactionsClient;