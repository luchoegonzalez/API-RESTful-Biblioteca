import { Router } from "express";
import { getBooks } from "../controllers/booksController";

const booksRouter = Router();

booksRouter.get("/", getBooks);

export default booksRouter;
