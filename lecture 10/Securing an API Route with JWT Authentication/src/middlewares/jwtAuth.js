// Please don't change the pre-written code
// Import the necessary modules here
import jwt from "jsonwebtoken";

const jwtAuth = (req, res, next) => {
  const { jwtToken } = req.cookies;
  console.log(jwtToken);

  try {
    const payload = jwt.verify(jwtToken, "(/`+jQ)tQl'IQgR&~hP>");
    next();
  } catch (error) {
    return res.status(401).send({ success: false, msg: error });
  }
};

export default jwtAuth;
