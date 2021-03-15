const fs = require('fs');
const path = require('path');

const pathToFile = path.join(__dirname, 'files', 'Homework.txt');

const writeToFile = () => {
  fs.writeFile(
    pathToFile,
    'This is my first homework.',
    {
      encoding: 'utf-8'
    },
    err => {
      if (err) throw err;
      console.log('File wrtten!');
    }
  );
};

const readFromFile = callBack => {
  fs.readFile(
    pathToFile,
    {
      encoding: 'utf-8'
    },
    (err, data) => {
      if (err) throw err;
      console.log(data);
    }
  );
};

module.exports = {
  writeToFile,
  readFromFile
};
