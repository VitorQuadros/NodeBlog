const express = require('express');
const bodyParser = require('body-parser');

const app = express();
// ejs view engine
app.set('view engine', 'ejs');

// static

app.use(express.static('public'));
// body parser
app.use(bodyParser.urlencoded({ extends: false }));
app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.render('index');
});

app.listen(3333, () => {
  console.log('Rodando...');
});
