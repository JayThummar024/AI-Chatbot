import { Router } from "express";
import { getAllUsers, userSignup } from "../controllers/user_controller.js";
import { signupValidator, validate } from "../utils/validator.js";

const userRoutes = Router();

userRoutes.get("/", getAllUsers);
userRoutes.post("/signup", validate(signupValidator), userSignup);

export default userRoutes;
