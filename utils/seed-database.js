"use strict";

const mongoose = require("mongoose");

const { MONGODB_URI } = require("../config");
const Result = require("../models/result");

const results = require("../db/seed.json");

mongoose
  .connect(
    MONGODB_URI,
    { useNewUrlParser: true }
  )
  .then(() => mongoose.connection.db.dropDatabase())
  .then(() => {
    return Promise.all([Result.insertMany(results)]);
  })
  .then(results => {
    console.info(`Inserted ${results.length} results`);
  })
  .then(() => mongoose.disconnect())
  .catch(err => {
    console.error(err);
  });
