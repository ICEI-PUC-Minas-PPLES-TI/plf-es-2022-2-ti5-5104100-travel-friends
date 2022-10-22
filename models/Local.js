const mongoose = require("mongoose");

const Local = mongoose.model("Local", {
  name: String,
  address: String,
  cep: String,
  openTime: String,
  closeTime: String,
});

module.exports = Local;
