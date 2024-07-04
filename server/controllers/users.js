import express from "express";
const router = express.Router();
import bcrypt from "bcryptjs";
import _ from "lodash";
import { User, validateUser } from "../models/user.js";

router.post("/", async (req, res) => {
  const { fname, lname, email, password, phone } = req.body;
  const { error } = validateUser(req.body);
  if (error) return res.status(400).send(error.details[0].message);
  
  const existingUser = await User.findOne({ email: req.body.email });
  if (existingUser) return res.status(400).send("User Already exists");

  const newUser = new User(
    _.pick(req.body, ["fname", "lname", "email", "password", "phone"])
  );

  const salt = await bcrypt.genSalt(10); 
  newUser.password = await bcrypt.hash(password, salt);

  try {
    await newUser.save(); 
    const token = newUser.generateAuthToken();
    console.log(token)
    res.status(200).header("x-auth-token", token).send({ token: token, user: newUser });
  } catch (err) {
    res.status(500).send("Internal Server error");
  }
});


export default router