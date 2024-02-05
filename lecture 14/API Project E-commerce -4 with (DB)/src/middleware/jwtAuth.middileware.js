import jwt from "jsonwebtoken";

const jwtAuth = (req, res, next) => {
  // 1. Read the token.
  console.log(req.headers);
  let token = req.headers["authorization"];

  // 2. If no token , return Error
  if (!token) {
    return res.status(401).send("Unauthorize");
  }

  // 3. check if token isValid(Verify Method from jwt Module).
  try {
    const payload = jwt.verify(token, "(/`+jQ)tQl'IQgR&~hP>");
    req.userID = payload.userID;
    console.log(payload);
  } catch (err) {
  // 4. return error.
    return res.status(401).send("Unauthorize");
  }
  // 5. call next middleware.
  next();
};


export default jwtAuth;