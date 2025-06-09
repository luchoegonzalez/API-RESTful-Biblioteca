import { Router } from "express";
import { getBooks, getBookById, createBook } from "../controllers/booksController";

const booksRouter = Router();

booksRouter.get("/", getBooks);
booksRouter.get("/:id", getBookById);

booksRouter.post("/", createBook);


export default booksRouter;
