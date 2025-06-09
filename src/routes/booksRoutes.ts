import { Router } from "express";
import { getBooks, getBookById, createBook, updateBook } from "../controllers/booksController";

const booksRouter = Router();

booksRouter.get("/", getBooks);
booksRouter.get("/:id", getBookById);

booksRouter.post("/", createBook);
booksRouter.patch("/:id", updateBook);


export default booksRouter;
