'use strict';

const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const path = require('path');


const {
  PORT,
  MONGODB_URI
} = require('./config');

const resultsRouter = require('./routes/results');


// Create an Express application
const app = express();

// Log all requests. Skip logging during
app.use(morgan(process.env.NODE_ENV === 'development' ? 'dev' : 'common', {
  skip: () => process.env.NODE_ENV === 'test'
}));

// Create a static webserver
app.use(express.static('public'));

// Parse request body
app.use(express.json());

// Mount routers
app.use('/results', resultsRouter);

// app.get('/', function (req, res) {
//   res.sendFile(path.join(__dirname + '/index.html'));
// });

// Custom 404 Not Found route handler
app.use((req, res, next) => {
  const err = new Error('Not Found');
  err.status = 404;
  next(err);
});




// Custom Error Handler
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



// app.get('*', (request, response) => {
//   response.sendFile(path.join(__dirname, 'client/build', 'index.html'));
// });


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