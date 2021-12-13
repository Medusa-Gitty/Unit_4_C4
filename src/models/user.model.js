const { Schema, model } = require("mongoose");
const bcrypt = require("bcryptjs");
const userSchema = new Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    // profile_photo: { type: String, required: true },
    // roles: { type: String, required: true },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

// userSchema.pre("save", function (next) {
//   if (!this.isModified("password")) return next();
//   bcrypt.genSalt(10, function (err, salt) {
//     bcrypt.hash(this.password, salt, function (err, hash) {
//       this.passowrd = hash;
//       return next();
//     });
//   });
// });

// userSchema.methods.checkPassword = function (password) {
//   return new Promise((resolve, reject) => {
//     bcrypt.compare(password, this.password, (err, same) => {
//       if (err) return reject(err);
//       else {
//         return resolve(same);
//       }
//     });
//   });
// };

module.exports = model("user", userSchema);
