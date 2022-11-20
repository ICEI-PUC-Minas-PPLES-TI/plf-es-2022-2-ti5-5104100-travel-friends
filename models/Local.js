const mongoose = require("mongoose");

const Local = mongoose.model("Local", {
  idCreator: String,
  name: String,
  address: String,
  cep: String,
  openTime: String,
  closeTime: String,
  location: {
    lat: Number,
    lng: Number,
  },
});

module.exports = Local;
