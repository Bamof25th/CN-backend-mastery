// Please don't change the pre-written code
// Import the necessary modules here
import { body, validationResult } from "express-validator";

export const formValidation = async (req, res, next) => {
  console.log(req.body);
  // console.log(filename)
  // Write your code here
  const rules = [
    body("name").notEmpty().withMessage("Name is required."),
    body("email").isEmail().withMessage("Enter Valid Email"),
    body("filename").custom((value, { req }) => {
      if (!req.file) {
        throw new Error("Profile image is required");
      } else return true;
    }),
  ];

  await Promise.all(
    rules.map((rule) => {
      return rule.run(req);
    })
  );

  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.send(errors);
  } else {
    next();
  }
};
