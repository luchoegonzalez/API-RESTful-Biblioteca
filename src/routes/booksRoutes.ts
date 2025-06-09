import { Router } from "express";
import { getBooks, getBookById } from "../controllers/booksController";

const booksRouter = Router();

booksRouter.get("/", getBooks);
booksRouter.get("/:id", getBookById);

export default booksRouter;
