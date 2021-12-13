require("dotenv").config();
const jwt = require("jsonwebtoken");

const verifyToken = (token) => {
  return new Promise((resolve, reject) => {
    jwt.verify(token, process.env.JWT_SECRET_KEY, function (err, token) {
      if (err) {
        return reject(err);
      } else {
        return resolve(token);
      }
    });
  });
};

module.exports = async (req, res, next) => {
  //if we receive the token
  const bearerToken = req?.headers?.authorization;
  //if not or token is not bearer
  if (!bearerToken || !bearerToken.startsWith("Bearer ")) {
    return res
      .status(403)
      .json({ status: "failed", message: "Please provide a valid token" });
  }
  //try to get user frm token
  const token = bearerToken.split(` `)[1];
  let user;
  try {
    user = await verifyToken(token);
  } catch (err) {
    return res.status(400).json({ message: "Please provide a valid token" });
  }
  //If no user found then throw err
  if (!user) {
    return res.status(404).json({ message: "Please provide a valid token" });
  }
  //else req user
  req.user = user;
  return next();
};
