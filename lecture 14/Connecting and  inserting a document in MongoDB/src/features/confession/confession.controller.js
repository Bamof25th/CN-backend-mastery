import ConfessionModel from "./confession.model.js";

export default class ConfessionController {
  async create(req, res) {
    const { title, body, author } = req.body;
    const confession = await ConfessionModel.create(title, body, author);
    console.log(req.body)
    res.status(201).send(confession);
  }
}
