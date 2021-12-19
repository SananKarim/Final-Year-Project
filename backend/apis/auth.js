const express = require("express");
const authRouter = express.Router();
const passport = require("../config/passportConfig");

const {
  isEmail,
  issueJWT,
  ValidateInput,
  createHash,
} = require("../lib/utils");

const { User } = require("../models/user");
const user = new User();

authRouter
  .get(
    "/session",
    passport.authenticate("jwt", { session: false }),
    (req, res, next) => {
      const user = req.user;
      res.status(200).json({
        success: true,
        msg: "Session is still valid.",
        ...user,
      });
    }
  )
  .post("/auth-user", ValidateInput, async (req, res, next) => {
    const { walletAddress } = req.fields;
    if (!walletAddress)
      return res.status(401).json({
        success: false,
        message: "wallet address cannot be null.",
      });

    try {
      let results = await user.getUserByWallet(walletAddress);
      if (!results.length) {
        await user.insertUser(walletAddress);
        results = await user.getUserByWallet(walletAddress);
      }

      const foundUser = results[0];
      const tokenObject = issueJWT(foundUser);
      return res.status(200).json({
        success: true,
        token: tokenObject.token,
        expiresIn: tokenObject.expires,
        ...foundUser,
      });
    } catch (error) {
      next(error);
    }
  })

  .put(
    "/update-profile",
    passport.authenticate("jwt", { session: false }),
    ValidateInput,
    async (req, res, next) => {
      let { fullName, username, email, bio } = req.fields;

      console.log(req.fields);
      const USER_ID = req.user.creatorID;

      if (!(fullName && email && username))
        return res.status(403).json({
          data: {
            message: "Please, fill all Inputs.",
          },
        });

      console.log(USER_ID);

      try {
        bio = bio || "";

        await user.updateUser(username, fullName, email, bio, USER_ID);

        return res.status(200).json({
          data: {
            username,
            fullName,
            email,
            bio,
          },
          message: "Details updated successfully.",
        });
      } catch (error) {
        next(error);
      }
    }
  );

module.exports = authRouter;
