"use strict";

const mongoose = require("mongoose");

const resultSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true
  },
  lastName: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  phone: {
    type: String,
    required: true
  },
  taxType: {
    type: String,
    required: true
  },
  checked: {
    type: String,
    required: true
  }
});

// Add `createdAt` and `updatedAt` fields
resultSchema.set("timestamps", true);

resultSchema.set("toObject", {
  virtuals: true, // include built-in virtual `id`
  transform: (doc, ret) => {
    delete ret._id; // delete `_id`
    delete ret.__v;
  }
});

module.exports = mongoose.model("Result", resultSchema);