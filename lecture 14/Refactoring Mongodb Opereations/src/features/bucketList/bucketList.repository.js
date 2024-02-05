// Please don't change the pre-written code
import BucketListModel from './bucketList.model.js';
import { getDB } from '../../config/mongodb.js';
// Import the necessary modules here

class BucketListRepository {
  async addBucketListItem(bucketListItem) {
    // Write your code here
    const { title, description, dateAdded, targetDate, isCompleted } = bucketListItem;
    
    const db = getDB();

    const newItem = new BucketListModel(
      title,
      description,
      dateAdded,
      targetDate,
      isCompleted
    );
    await db.collection("bucketListItems").insertOne(newItem);

    return newItem;
  }

  async findOneBucketListItem(title) {
    // Write your code here
    const db = getDB();

    const item = await db.collection("bucketListItems").findOne({ title });

    return item;
  }
}

export default BucketListRepository;
