const path = require('path');
const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const expressJwt = require('express-jwt');
const compression = require('compression');
const config = require('./config');

const app = express();

// routes
const auth = require('./routes/auth');

// DB Setup
mongoose.connect(config.db, (err) => console.log(err));
mongoose.Promise = require('bluebird');

app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(compression());
// Disable the "X-Powered-By: Express" HTTP header
app.disable('x-powered-by');

app.use(express.static(path.join(__dirname, '../build')));

// app.use('/api', expressJwt({ secret: config.secretKey })
//   .unless({ path: ['/api/signin', '/api/signup'] }));

app.use('/auth', auth);

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../build/index.html'));
});

// Server Setup
app.listen(config.port, (err) => {
  if (err) return console.log(err);
  console.log('Listening at http://localhost:' + config.port);
});