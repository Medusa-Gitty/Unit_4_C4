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
