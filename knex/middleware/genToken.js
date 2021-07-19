/** @format */

const { jwt } = require("../../api/configMW");

module.exports = {
  genToken,
};

function genToken(user) {
  const payload = {
    fName: user.fName,
    lName: user.lName,
    id: user.id,
  };

  const secret = process.env.JWT_SECRET;
  const options = {
    expiresIn: "3h",
  };

  return jwt.sign(payload, secret, options);
}
