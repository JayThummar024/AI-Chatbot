import User from "../models/User.js";

export const getAllUsers = async (req,res,next) => {
  try {
    const users = await User.find();
    return res.status(200).json({message:"Ok" , users});
  } catch (err) {
    console.log(err)
    return res.status(404).json({ message: "Error", error : err});
  }
};
