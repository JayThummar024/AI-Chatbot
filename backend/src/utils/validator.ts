import { body, ValidationChain, validationResult } from "express-validator";

export const validate = (validations: ValidationChain[]) => {
  return async (req, res, next) => {
    for (let validation of validations) {
      const result = await validation.run(req);
      if (!result.isEmpty()) {
        break;
      }
    }
    const errors = validationResult(req);
    if (errors.isEmpty()) {
      next();
    }
    return res.status(402).json({errors : errors.array()})
  };
};

export const signupValidator = [
  body("name").notEmpty().withMessage("Name can't be empty"),
  body("email").trim().isEmail().withMessage("Please enter valid Email"),
  body("password")
    .trim()
    .isLength({ min: 6 })
    .withMessage("password should contain atleast 6 characters"),
];
