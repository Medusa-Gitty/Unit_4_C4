const express = require("express");
const User = require("../models/user.model");
const upload = require("../middleware/upload");
const router = express.Router();

router.post("/", upload.single("profileImage"), async (req, res) => {
  try {
    const user = await User.create({
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
      profile_url: req.file.path,
    });
    return res.status(200).json({ user });
  } catch (e) {
    return res.status(500).json({ status: "error", message: e.message });
  }
});

module.exports = router;
