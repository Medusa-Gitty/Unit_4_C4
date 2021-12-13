const mongoose = require("mongoose");

const showSchema = new mongoose.Schema(
  {
    timing: { type: String, required: true },
    movie: { type: Schema.Types.ObjectId, ref: "movie", required: true },
    total_seats: { type: Number, required: true },
    screen: { type: Schema.Types.ObjectId, ref: "screen", required: true },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

module.exports = mongoose.model("show", showSchema);
