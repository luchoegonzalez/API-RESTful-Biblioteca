import { Router } from "express";
import { getBooks, getBookById, createBook, updateBook, deleteBook } from "../controllers/booksController";

const booksRouter = Router();

booksRouter.get("/", getBooks);
booksRouter.get("/:id", getBookById);

booksRouter.post("/", createBook);
booksRouter.patch("/:id", updateBook);
booksRouter.delete("/:id", deleteBook);


export default booksRouter;
