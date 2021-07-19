/** @format */

const { jwt } = require("../../api/configMW");

module.exports = {
  protected,
};

function protected(req, res, next) {
  const token = req.headers.authorization;

  if (token) {
    jwt.verify(token, process.env.JWT_SECRET, (err, decodedToken) => {
      if (err) {
        res.status(401).json({ message: "Invalid token." });
      } else {
        req.decodedToken = decodedToken;
        next();
      }
    });
  } else {
    res.status(403).json({ message: "Not authorized." });
  }
}
