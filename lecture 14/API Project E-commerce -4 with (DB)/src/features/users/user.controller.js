import UserModel from "./user.model.js";
import jwt from "jsonwebtoken";
import UserRepository from "./user.repository.js";
import bcrypt from "bcrypt";

export default class UserController {
  constructor() {
    this.userRepository = new UserRepository();
  }

  async signUp(req, res) {
    try {
      const { name, email, password, type } = req.body;
      // console.log(req.body);

      const hashedPassword = await bcrypt.hash(password, 12);

      const createdUser = new UserModel(name, email, hashedPassword, type);

      await this.userRepository.signUp(name, email, hashedPassword, type);

      res.status(201).send({ name, email, type });
    } catch (err) {
      console.log(err);
    }
  }
  async signIn(req, res) {
    // const { email, password } = req.body;
    try {
      // 1. find User BY Email
      const user = await this.userRepository.findByEmail(req.body.email);
      if (!user) {
        return res.status(400).send("Incorrect Credentials");
      } else {
        // 2. compare password with hashed password
        const result = await bcrypt.compare(req.body.password, user.password);

        if (result) {
          // 3. Create Token
          const token = jwt.sign(
            { userID: user._id, email: user.email },
            process.env.JWT_SECRET,
            { expiresIn: "1h" }
          );
          // 4. Send Token.
          return res.status(200).send(token);
        } else {
          return res.status(400).send("Incorrect Credentials");
        }
      }
    } catch (err) {
      console.log(err);
      res.status(500).send(`Error Processing Request ${err}`);
    }
  }
}
