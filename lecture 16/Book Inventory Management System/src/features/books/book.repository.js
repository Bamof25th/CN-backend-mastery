// -------------pre-written code starts---------------
import mongoose from "mongoose";
import { bookSchema } from "./book.schema.js";

// creating model from schema.
const booksModel = mongoose.model("Book", bookSchema);

export default class BookRepository {
  //book creation
  async createBook(bookData) {
    const book = new booksModel(bookData);
    const savedBook = await book.save();
    return savedBook;
  }

  // filtering of book by id
  async getOne(id) {
    const book = await booksModel.findById(id);
    return book;
  }

  // ------------prewritten code ends----------------

  // Complete the following functions:

  //filtering the books based on genre
  async listBooksByGenre(genre) {
    const booksList = await booksModel.find({ genre: genre });
    console.log(booksList);
    return booksList;
  }

  //increasing the count of available books
  async updateBookAvailability(bookId, quantity) {
    const updatedBook = await booksModel.findById(bookId);
    console.log(updatedBook);
    updatedBook.availableCopies = quantity + updatedBook.availableCopies;
    const res = await updatedBook.save();
    return res;
  }

  //deletion of book
  async deleteBookById(bookId) {
    const removedBook = await booksModel.findByIdAndRemove(bookId);
    return removedBook;
  }
}
