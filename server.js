'use strict';

const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');

const { PORT, MONGODB_URI } = require('./config');

const resultsRouter = require('./routes/results');

const app = express();

app.use(morgan(process.env.NODE_ENV === 'development' ? 'dev' : 'common', {
  skip: () => process.env.NODE_ENV === 'test'
}));

app.use(express.static('Public'));
app.use(express.json());
app.use('/results', resultsRouter);

app.use((req, res, next) => {
  const err = new Error('Not Found');
  err.status = 404;
  next(err);
});

app.use((err, req, res, next) => {
  if (err.status) {
    const errBody = Object.assign({}, err, {
      message: err.message
    });
    res.status(err.status).json(errBody);
  } else {
    console.error(err);
    res.status(500).json({
      message: 'Internal Server Error'
    });
  }
});

if (require.main === module) {
  mongoose.connect(MONGODB_URI, { useNewUrlParser: true })
    .catch(err => {
      console.error(`ERROR: ${err.message}`);
      console.error('\n === Did you remember to start `mongod`? === \n');
      console.error(err);
    });
  app.listen(PORT, function () {
    console.info(`Server listening on ${this.address().port}`);
  })
    .on('error', err => {
      console.error(err);
    });
}

module.exports = app;