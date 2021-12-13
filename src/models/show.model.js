const { Schema, model } = require("mongoose");

const showSchema = new Schema(
  {
    movie: { type: Schema.Types.ObjectId, ref: "movie", required: true },
    screen: { type: Schema.Types.ObjectId, ref: "screen", required: true },
    timing: { type: String, required: true },
    total_seats: { type: Number, require: true },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

module.exports = model("show", showSchema);
