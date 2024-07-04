import express from "express";
import bcrypt from "bcryptjs";
import { User } from "../models/user.js";
import Joi from "joi";
import _ from "lodash";

const router = express.Router();
router.post("/", async (req, res) => {
  const { error } = validate(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  try {
    const existingUser = await User.findOne({ email: req.body.email });
    if (!existingUser) return res.status(400).send("Invalid Email Or Password");

    const validPassword = await bcrypt.compare(
      req.body.password,
      existingUser.password
    );
    if (!validPassword) return res.status(400).send("Invalid Email or Password");

    const token = existingUser.generateAuthToken();
    const userData = _.pick(existingUser, ["_id", "email", "fname", "lname"]);

    res.status(200).send({ token: token, message: "Logged in successfully", user: userData });
  } catch (err) {
    console.error("Internal server error", err);
    res.status(500).send("Internal server error");
  }
});


function validate(user) {
  const schema = Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().required()
  });

  return schema.validate(user);
}

export default router;
