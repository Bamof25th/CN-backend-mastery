import mongoose from "mongoose";
import { bookSchema } from "./book.schema.js";

const BookModel = mongoose.model('Books',bookSchema);

export default class BookRepository {
  // -----Change code in below functions only-----

  //book creation
  async createBook(bookData) {
    const newBook = await BookModel.create(bookData);
    return newBook;
  }

  //filtering the book by id
  async getOne(id) {
    return await BookModel.findOne({ id });
  }
}
