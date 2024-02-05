import UserModel from "../features/users/user.model.js";

const basicAuthorizer = (req, res, next) => {
  //1. chech if authorization header is empty.

  const authHeader = req.headers["authorization"];
  if (!authHeader) {
    return res.status(401).send("NO authorizationi details found");
  }
  console.log(authHeader);

  // 2. Extract the credentials.[Basic qwertyildnlanjdlireijf]

  

  // 3. Decode the Credentials

  const decodedCreds = Buffer.from(base64Credentials, "base64").toString('utf-8');
  console.log(decodedCreds);// [username:passeord]

  const creds = decodedCreds.split(':');

   const user = UserModel.getAll().find(u=> u.email==creds[0] && u.password == creds[1]);

   if (user) {
    next();
   } else {
    return res.status(401).send(`incorrect credentials!`);
   }


};


export default basicAuthorizer;