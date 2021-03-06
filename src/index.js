const express = require("express");
const app = express();
app.use(express.json());

const movieController = require("./controllers/movie.controller");
app.use("/movies", movieController);

const screenController = require("./controllers/screen.controller");
app.use("/screens", screenController);
const theatreController = require("./controllers/theatre.controller");
app.use("/theatres", theatreController);

const showController = require("./controllers/show.controller");
app.use("/shows", showController);

const seatController = require("./controllers/seat.controller");
app.use("/seats", seatController);

const { register, login } = require("./controllers/user.controller");
app.post("/register", register);
app.post("/login", login);

module.exports = app;
