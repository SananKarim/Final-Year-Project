require("dotenv").config();
const jsonwebtoken = require("jsonwebtoken");
const formidable = require("formidable");
const crypto = require("crypto");
module.exports.isEmail = function (email) {
  // Regular Expression (Not accepts second @ symbol
  // before the @gmail.com and accepts everything else)
  const regexp =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  // Converting the email to lowercase
  return regexp.test(String(email).toLowerCase());
};

module.exports.createUsername = function (name) {
  return name + "_" + String(Math.floor(Math.random() * 100000));
};

module.exports.issueJWT = function (user) {
  const _id = user.creatorID;
  const expiresIn = "1d";
  const payload = {
    sub: _id,
    iat: Date.now(),
  };

  const signedToken = jsonwebtoken.sign(payload, process.env.JWT_SECRET, {
    expiresIn: expiresIn,
  });

  return {
    token: "Bearer " + signedToken,
    expires: expiresIn,
  };
};

module.exports.ValidateInput = function (req, res, next) {
  const form = formidable({ multiples: true });

  form.parse(req, (err, fields) => {
    if (err) {
      next(err);
      return;
    } else {
      req.fields = fields;
      next();
    }
  });
};

module.exports.createHash = (input) => {
  const hash = crypto
    .createHash("sha256", process.env.SECRET)
    .update(input)
    .digest("hex");
  return hash;
};

module.exports.generateToken = (input) => {
  const key = String(Date.now());
  const token = crypto.createHash("sha256", input).update(key).digest("hex");
  return token;
};
