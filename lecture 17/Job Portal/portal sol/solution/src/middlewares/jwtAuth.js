import jwt from "jsonwebtoken";

export const auth = async (req, res, next) => {
  const { jwtToken } = req.cookies;
  jwt.verify(jwtToken, "codinNinjas", (err, data) => {
    if (err) {
      res.status(400).send("unauthorized! login to continue!");
    } else {
      // console.log("data is", data);
      req._id = data._id;
      req.user = data.user;
      next();
    }
  });
};
