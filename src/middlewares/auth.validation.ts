import {body} from "express-validator";

export const loginValidation = [
    body("email")
    .notEmpty().withMessage("Email is required")
    .isEmail().withMessage("Invalid email"),

    body("password")
    .notEmpty().withMessage("password is required")
    .isLength({min:6}).withMessage("password too short"),
];


export const signupValidation = [
    body("name").notEmpty(),
    body("email").isEmail(),
    body("password").isLength({min:6}),
    
];