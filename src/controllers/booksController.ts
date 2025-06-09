import { Request, Response } from 'express';
import Book from '../models/booksModel';

const getBooks = async (req: Request, res: Response): Promise<any> => {
  try {
    const books = await Book.find();
    res.status(200).json({
      success: true,
      data: books,
      message: 'Books retrieved successfully'
    });
  } catch (error) {
    const err = error as Error;
    res.status(500).json({
      success: false,
      message: err.message
    });
  }
}

const getBookById = async (req: Request, res: Response): Promise<any> => {
  try {
    const { id } = req.params;
    const book = await Book.findById(id);
    if (!book) {
      return res.status(404).json({
        success: false,
        message: 'Book not found'
      });
    }

    res.status(200).json({
      success: true,
      data: book,
      message: 'Book retrieved successfully'
    });

  } catch (error) {
      const err = error as Error;
      res.status(500).json({
        success: false,
        message: err.message
      });
  }

}

const createBook = async (req: Request, res: Response): Promise<any> => {
  try {
    const { title, author, publishedYear, genre, available } = req.body;

    if (!title || !author) {
      return res.status(400).json({
        success: false,
        message: 'Title and author are required'
      });
    }

    const newBook = new Book({
      title,
      author,
      publishedYear,
      genre,
      available
    });

    await newBook.save();

    res.status(201).json({
      success: true,
      data: newBook,
      message: 'Book created successfully'
    });

  } catch (error) {
    const err = error as Error;
    res.status(500).json({
      success: false,
      message: err.message
    });
  }
}

export {getBooks, getBookById, createBook};