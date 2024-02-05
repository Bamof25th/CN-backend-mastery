// import { getDB } from "../../config/mongodb.js";

export default class BucketListModel {
  constructor(title, description, dateAdded, targetDate, isCompleted) {
    this.title = title;
    this.description = description;
    this.dateAdded = dateAdded;
    this.targetDate = targetDate;
    this.isCompleted = isCompleted;
  }

  // Move the below methods to the repository file
  // static async addBucketListItem(
  //   title,
  //   description,
  //   dateAdded,
  //   targetDate,
  //   isCompleted
  // ) {
  //   const db = getDB();

  //   const newItem = new BucketListModel(
  //     title,
  //     description,
  //     dateAdded,
  //     targetDate,
  //     isCompleted
  //   );
  //   await db.collection("bucketListItems").insertOne(newItem);

  //   return newItem;
  // }

//   static async findOneBucketListItem(title) {
    
//   }
// 
}
