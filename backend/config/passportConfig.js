require("dotenv").config();

const passport = require("passport"),
  //   LocalStrategy = require("passport-local").Strategy,
  JwtStrategy = require("passport-jwt").Strategy,
  ExtractJwt = require("passport-jwt").ExtractJwt;
const { User } = require("../models/user");

const user = new User();
const jWTOptions = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: process.env.JWT_SECRET,
};

// jwt strategy for login
passport.use(
  new JwtStrategy(jWTOptions, async (payload, done) => {
    try {
      const results = await user.getUserById(payload.sub);
      const foundUser = results[0];
      if (foundUser) return done(null, foundUser);
      else return done(null, false);
    } catch (err) {
      done(err, false);
    }
  })
);

module.exports = passport;
