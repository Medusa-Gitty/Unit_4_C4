const express = require("express");
const router = express.Router();
const Show = require("../models/show.model");
const Movie = require("../models/movie.model");
const Theatre = require("../models/theatre.model");

router.post("/", async (req, res) => {
  const show = await Show.create(req.body);
  return res.send({ show });
});

router.get("/:moviename", async (req, res) => {
  const movie = await Movie.findOne({ movie_name: req.params.moviename })
    .lean()
    .exec();
  const shows = await Show.find({ movie: movie._id })
    .populate("movie")
    .populate("screen")
    .lean()
    .exec();

  return res.send({ shows_availbale: shows });
});

router.get("/location/:place", async (req, res) => {
  const theatre = await Theatre.findOne({ location: req.params.place })
    .lean()
    .exec();
  const shows = await Showtime.find({ theatre: theatre._id })
    .limit(1)
    .populate("movie")
    .populate({ path: "screen", populate: { path: "theatre" } })
    .lean()
    .exec();

  return res.send({ shows_availbale: shows });
});

module.exports = router;
