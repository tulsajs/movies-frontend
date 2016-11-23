const path = require('path');
const express = require('express');
const app = express();
const indexPath = path.join(__dirname, 'www/index.html');
const publicPath = express.static(path.join(__dirname, 'www'));
const port = (process.env.PORT || 8080);

app.use('/', publicPath);
app.get('/', function (_, res) { res.sendFile(indexPath); });

app.listen(port);

/*eslint no-console: 0*/
console.log(`Listening at http://localhost:${port}`);
