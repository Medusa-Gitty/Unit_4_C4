const mongoose = require("mongoose");

const screenSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    theatre: { type: Schema.Types.ObjectId, ref: "theatre", required: true }, //references the theatres collection
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

module.exports = mongoose.model("screen", screenSchema);
