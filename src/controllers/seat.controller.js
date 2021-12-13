const express = require("express");
const router = express.Router();
const Seat = require("../models/seat.model");

router.post("/", async (req, res) => {
  const seat = await Seat.create(req.body);
  return res.send({ seat });
});

router.post("/book", async (req, res) => {
  const seat = await Seat.find().populate("show").lean().exec();
  return res.send({ "Booking Confirmed": seat });
});

router.get("/", async (req, res) => {
  const seat = await Seat.find().populate("show").lean().exec();
  return res.send({ seat });
});

module.exports = router;
