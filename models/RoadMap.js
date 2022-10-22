const mongoose = require("mongoose");

const RoadMap = mongoose.model("RoadMap", {
  idCreator: String,
  idLocal: String,
  title: String,
  isFree: Boolean,
  price: Number,
  type: String,
  person: Number,
  start: String,
  end: String,
  participants: [
    {
      idUser: String,
    },
  ],
});

module.exports = RoadMap;
