// const express = require("express");
const User = require("../models/user.model");
const jwt = require("jsonwebtoken");
require("dotenv").config();

const newToken = (user) => {
  return jwt.sign({ user: user }, process.env.JWT_SECRET_KEY);
};

const register = async (req, res) => {
  try {
    let user = await User.findOne({ email: req.body.email }).lean().exec();
    console.log(user);
    if (user)
      return res
        .status(400)
        .json({ message: "Please provide different email address" });

    user = await User.create(req.body);

    const token = newToken(user);

    return res.send({ user, token });
  } catch (e) {
    return res.status(500).send(e.message);
  }
};

const login = async (req, res) => {
  try {
    let user = await User.findOne({ email: req.body.email }).lean().exec();
    if (!user) {
      return res
        .status(400)
        .json({ message: "Please provide valid email and password" });
    }
    const token = newToken(user);
    return res.send({ user, token });
  } catch (e) {
    return res.status(500).json({ message: e.message });
  }
};

// const upload = require("../middleware/upload");
// const router = express.Router();

// router.post("/", upload.single("profileImage"), async (req, res) => {
//   try {
//     const user = await User.create({
//       name: req.body.name,
//       email: req.body.email,
//       password: req.body.password,
//       profile_url: req.file.path,
//     });
//     return res.status(200).json({ user });
//   } catch (e) {
//     return res.status(500).json({ status: "error", message: e.message });
//   }
// });

module.exports = { register, login };
