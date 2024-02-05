import mongoose from "mongoose";
import BookRepository from "./book.repository.js";

export default class BookController {
  constructor() {
    this.bookRepository = new BookRepository();
  }

  //------change code in below functions only--------

  // creation of book
  createBook = async (req, res) => {
    try {
      const { title, author, genre, copies, availableCopies } = req.body;
      const newBook = await this.bookRepository.createBook({
        title,
        author,
        genre,
        copies,
        availableCopies,
      });
      console.log(newBook);
      res.status(201).send(newBook);
    } catch (error) {
      console.log(error);
      res.status(404).send("Not-Found");
    }
  };

  // filtering of book by id
  getOne = async (req, res) => {
    try {
      const book = await this.bookRepository.getOne(req.params.id);
      console.log(book);
      if (book) return res.status(200).send(book);
      res.status(404).send("Not-Found");
    } catch (error) {
      console.log(error);
    }
  };
}
