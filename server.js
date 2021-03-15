require('dotenv').config();
const http = require('http');

const { readFromFile, writeToFile } = require('./fileSystem');

writeToFile();

readFromFile((data) => {
  console.log('Data retrived');
  console.log({data});
});

const port = process.env.PORT || 3000;


const homework = http.createServer((req, res) => {

  const segmentUrl = req.url.split('?');
  const defaultUrl = segmentUrl[0];
  const queryParams = segmentUrl[1];

  if (req.method === 'GET' && req.url === '/files') {
    res.writeHead(200);
    res.end();
  }
  else if (req.method === 'POST' && req.url === '/files') {
    let notepad = '';
    req.on('data', (chunk) => {
      notepad += chunk;
    }).on('end', () => {
      console.log(notepad);
      res.writeHead(201);
      res.end(notepad);
    });
  }
  else {
    res.writeHead(404);
    res.end('Not Found');
  }
});

homework.listen(port, () => {
  console.log('Server started!');
});
