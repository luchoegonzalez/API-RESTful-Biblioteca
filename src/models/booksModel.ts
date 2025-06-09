import { Schema, model } from "mongoose";

const bookModel = new Schema({
  title: {type: String, required: true, unique: true},
  author: {type: String, required: true},
  publishedYear: {type: Number, required: false},
  genre: {type: String, required: false},
  available: {type: Boolean, default: true},
}, {versionKey: false});

const Book = model("Book", bookModel);

export default Book;