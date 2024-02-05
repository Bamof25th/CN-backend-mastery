import { body, validationResult } from "express-validator";

export default async function ValidateRequest(req, res, next) {
  // Validate data

  // 1. set up rules for validation.
  const rules = [
    body("name").notEmpty().withMessage("Name is required."),
    body("price")
      .isFloat({ gt: 0 })
      .withMessage("Price should be a positive value."),
    body("imageUrl").isURL().withMessage("Invalid URL"),
  ];

  // 2. run the rules for validation.
  await Promise.all(rules.map((rule) => rule.run(req)));
       
  // 3. check if there are any errors after running the rules
  var validationErrors = validationResult(req);

  
  if (!validationErrors.isEmpty()) {
    return res.render("new-product.ejs", {
      errorMessage: validationErrors.array()[0].msg,
    });
  }
  next();
}








// const { name, price, imageUrl } = req.body;
// let errors = [];
// if (!name || name.trim() == "") {
//   errors.push(`Name is required`);
// }
// if (!price || parseFloat(price) < 1) {
//   errors.push("Price must be a Positive Value");
// }
// try {
//   new URL(imageUrl);
// } catch (err) {
//   errors.push(`URL is invalid`);
// }
