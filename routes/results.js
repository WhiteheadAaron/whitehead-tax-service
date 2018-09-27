"use strict";

const express = require("express");
const Result = require("../models/result");
const mongoose = require("mongoose");

const router = express.Router();

/* ========== GET/READ ALL ITEMS ========== */
router.get("/", (req, res, next) => {


  Result.find()
    .sort([['createdAt', 'descending']])
    .select("firstName lastName email phone taxType checked createdAt")
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
    taxType: req.body.taxType,
    checked: false,
    createdAt: req.body.createdAt
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

router.put('/:id', (req, res, next) => {
  const id = req.params.id;
  const newObj = {
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
    phone: req.body.phone,
    checked: req.body.checked,
    taxType: req.body.taxType,
    createdAt: req.body.createdAt
  }
  console.log(newObj);

  return Result.findOneAndUpdate({ _id: id }, newObj, { new: true })
    .select('firstName lastName email phone taxType checked')
    .then(results => {
      res.json(results);
    })
    .catch(err => {
      console.log(err);
    })

})

router.delete('/:id', (req, res, next) => {
  const id = req.params.id;
  console.log(id);
  
  return Result.findOneAndDelete({ _id: id })
    .then(() => {
      res.status(204).end();
    })
    .catch(err => {
      next(err);
    })
})



module.exports = router;