const fs = require('fs');
const path = require('path');

const writeFile = (fileName, content) => {
  fs.writeFile(path.resolve(__dirname, '../report', fileName), content, 'utf8', (err) => {
    if (!err) return console.log('Succeeded!');
    console.log(err);
  });
};

module.exports = writeFile;
