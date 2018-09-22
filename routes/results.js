"use strict";

const express = require("express");
const Result = require("../models/result");
const mongoose = require("mongoose");

const router = express.Router();

/* ========== GET/READ ALL ITEMS ========== */
router.get("/", (req, res, next) => {


  Result.find()
    .select("firstName lastName email phone taxType")
    .then(results => {
      res.json(results);
    })
    .catch(err => {
      next(err);
    });
});


router.post("/", (req, res, next) => {
  const newObj = {
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
    phone: req.body.phone,
    taxType: req.body.taxType
  };

  if (!newObj.firstName || !newObj.lastName) {
    console.log("Must input name");
    const err = new Error("Missing name in req body");
    err.status = 400;
    return next(err);
  }

  return Result.create(newObj)
    .then(results => {
      res.location(`${req.originalUrl}/${results.id}`);
      res.status(201).json(results);
    })

    .catch(err => {
      console.error(`ERROR: ${err.message}`);
      console.error(err);
    });
});



module.exports = router;