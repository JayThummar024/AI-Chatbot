import mongoose from "mongoose";
import Chat from "./Chat.js";

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    require: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  chats: [Chat],
});

export default mongoose.model("User", userSchema);
