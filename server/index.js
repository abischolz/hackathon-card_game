const express = require('express');
const morgan = require('morgan');
const path = require('path');

const app = express();

const port = process.env.PORT || 2500;

app.listen(port, function () {
  console.log(`LISTENING ON PORT ${port}`);
});

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(morgan('dev'));

app.use(express.static(path.join(__dirname, '../public')));

app.get('/', (req, res, next) => {
  res.sendFile(path.join(__dirname, '/public/index.html'));
});

app.use((err, req, res, next) => {
  console.error(err, typeof next);
  console.error(err.stack);
  res.status(err.status || 500).send(err.message || 'Internal server error.');
});
