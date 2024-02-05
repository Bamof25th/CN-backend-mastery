// Please don't change the pre-written code
// Import the necessary modules here

import { getAllUsers } from "../features/user/model/user.model.js";

const basicAuthMiddleware = (req, res, next) => {
  const authHeader = req.headers["authorization"];
  if (!authHeader) {
    return res
      .status(401)
      .send({ success: false, message: "no authorization details found" });
  }

  const basic64Ceredentials = authHeader.replace("Basic ", '');

  const decodeCred = Buffer.from(basic64Ceredentials, "base64").toString('utf8');

  const creds = decodeCred.split(':');

  const user = getAllUsers().find(u => u.email == creds[0] && u.password == creds[1]);

  if (user) {
    next();
  } else {
    return res.status(401).send({success:false , message:"authorzation failed"})
  }
};

export default basicAuthMiddleware;
