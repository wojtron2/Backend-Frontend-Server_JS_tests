const http = require('http');
const fs = require('fs');
const path = require('path');

const server = http.createServer((req, res) => {
  // mapowanie plików statycznych
  let filePath = path.join(__dirname, 'public', req.url === '/' ? 'index.html' : req.url);
  // domyślnie html
  let ext = path.extname(filePath) || '.html';
  const contentType = ({
    '.html':'text/html', '.css':'text/css', '.js':'text/javascript',
    '.png':'image/png', '.jpg':'image/jpeg', '.jpeg':'image/jpeg', '.svg':'image/svg+xml'
  })[ext] || 'application/octet-stream';

  fs.readFile(filePath, (err, content) => {
    if (err) {
      // prosty 404
      res.writeHead(404, {'Content-Type':'text/plain; charset=utf-8'});
      return res.end('404: Nie znaleziono');
    }
    res.writeHead(200, {'Content-Type': contentType});
    res.end(content);
  });
});

server.listen(3000, () => console.log('Serwer działa: http://localhost:3000'));