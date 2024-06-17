const jwt = require("jsonwebtoken");

const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWTKEY, {
    expiresIn: "30d",
  });
};

module.exports = generateToken;
