const express = require("express");
const authenticate = require("../middleware/authentication");
const router = express.Router();
const Movie = require("../models/movie.model");

router.post("/", authenticate, async (req, res) => {
  const movie = await Movie.create(req.body);
  return res.send({ movie });
});

router.get("/", authenticate, async (req, res) => {
  const movies = await Movie.find().lean().exec();
  return res.send({ movies });
});

router.get("/:actor", authenticate, async (req, res) => {
  const movies = await Movie.find({ actors: req.params.actor }).lean().exec();
  return res.send({ movies });
});

module.exports = router;
