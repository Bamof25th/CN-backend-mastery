import { LikeRepostory } from "./like.repository.js";

export class LikeController {
  constructor() {
    this.likeRepository = new LikeRepostory();
  }
  async getLikes(req, res) {
    try {
      const { id, type } = req.query;
      const likes = await this.likeRepository.getLikes(type, id);
      return res.status(200).send(likes);
    } catch (err) {
      console.log(err);
      throw new ApplicationError("Something Went Wrong ", 500);
    }
  }
  async likeItems(req, res) {
    try {
      console.log(req.body);
      const { id, type } = req.body;
      if (type != "Product" && type != "Category") {
        return res.status(400).send("Invalid");
      }
      if (type == "Product") {
        await this.likeRepository.likeProduct(req.userID, id);
      } else {
        await this.likeRepository.likeCategory(req.userID, id);
      }
    } catch (err) {
      console.log(err);
      throw new ApplicationError("Something Went Wrong ", 500);
    }
    return res.status(200).send({ success: true });
  }
}
