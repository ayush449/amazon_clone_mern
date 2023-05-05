const mongoose = require("mongoose");
const validator = require("validator");
const bcrypt = require("bcryptjs");
const  jwt=  require("jsonwebtoken");


const sellerSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  products: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Product',
    },
  ],
});

const Seller = mongoose.model('Seller', sellerSchema);

module.exports = Seller;
