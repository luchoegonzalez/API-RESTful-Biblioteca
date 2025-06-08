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

export {getBooks};