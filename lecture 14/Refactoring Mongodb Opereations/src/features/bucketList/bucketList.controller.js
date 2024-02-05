import BucketListModel from "./bucketList.model.js";
import BucketListRepository from "./bucketList.repository";

export default class BucketListController {
  constructor() {
    this.bucketListRepository = new BucketListRepository();
  }

  add = async (req, res) => {
    // const { title, description, dateAdded, targetDate, isCompleted } = req.body;
    // Refactor to use the repository method
    const item = await this.bucketListRepository.addBucketListItem(req.body);

    res.status(201).send(item);
  };

  get = async (req, res) => {
    const { title } = req.query;
    // Refactor to use the repository method
    const item = await this.bucketListRepository.findOneBucketListItem(title);

    if (!item) {
      res.status(200).send("Item not found.");
    } else {
      res.status(200).send(item);
    }
  };
}
