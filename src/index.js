const express = require("express");
const app = express();

const movieController = require("./controllers/movie.controller");
app.use("/movies", movieController);

const theatreController = require("./controllers/theatre.controller");
app.use("/theatres", theatreController);

const screenController = require("./controllers/screen.controller");
app.use("/screens", screenController);

const showtimeController = require("./controllers/showtime.controller");
app.use("/showtimes", showtimeController);

const seatController = require("./controllers/seat.controller");
app.use("/seats", seatController);

const { register, login } = require("./controllers/user.controller");
app.post("/register", register);
app.post("/login", login);

app.use(express.json());

module.exports = app;
