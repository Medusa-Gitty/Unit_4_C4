const mongoose = require("mongoose");

const theatreSchema = new mongoose.Schema(
  {
    theatre_name: { type: String, required: true },
    location: { type: String, required: true },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

module.exports = mongoose.model("theatre", theatreSchema);
