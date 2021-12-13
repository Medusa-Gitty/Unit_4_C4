const mongoose = require("mongoose");

const seatSchema = new mongoose.Schema(
  {
    screen: { type: Schema.Types.ObjectId, ref: "show", required: true },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

module.exports = mongoose.model("seat", seatSchema);
