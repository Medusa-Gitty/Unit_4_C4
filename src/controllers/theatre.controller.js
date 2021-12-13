const express = require("express");
const router = express.Router();
const Theatre = require("../models/theatre.model");

router.post("/", async (req, res) => {
  const theatre = await Theatre.create(req.body);
  return res.send({ theatre });
});

module.exports = router;
