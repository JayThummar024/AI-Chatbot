import User from "../models/User.js";
import { hash } from "bcrypt";

export const getAllUsers = async (req, res, next) => {
  try {
    const users = await User.find();
    return res.status(200).json({ message: "Ok", users });
  } catch (err) {
    console.log(err);
    return res.status(404).json({ message: "Error", error: err });
  }
};

export const userSignup = async (req, res, next) => {
  try {
    const { name, email, password } = req.body;

    const hashedPass = await hash(password, 10);

    const user = new User({
      name,
      email,
      password: hashedPass,
    });

    await user.save();
    return res.status(200).json({ message: "Ok", id: user._id.toString() });
  } catch (err) {
    console.log(err);
    return res.status(404).json({ message: "Error", error: err });
  }
};
