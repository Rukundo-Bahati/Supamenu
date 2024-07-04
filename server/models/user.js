import mongoose from "mongoose";
import jwt from "jsonwebtoken";
import config from "config";
import Joi from "joi";

const userSchema = new mongoose.Schema({
  fname: String,
  lname: String,
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  phone: String,
});

userSchema.methods.generateAuthToken = function () {
  const token = jwt.sign({ _id: this._id }, config.get("KEY"));
  return token;
};


const User = mongoose.model("User", userSchema);

function validateUser(user) {
  const schema = Joi.object({
    fname: Joi.string().min(3).max(30).required(),
    lname: Joi.string().min(3).max(30).required(),
    email: Joi.string().min(5).max(255).required().email(),
    phone: Joi.number(),
    password: Joi.string().required(),
  });
  return schema.validate(user);
}

export { User, validateUser };
