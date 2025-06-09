import {Response} from "express";

const showInternalError = (res: Response, error: Error) => {
    res.status(500).json({
      success: false,
      message: error.message
    });
}

const showNotFound = (res: Response) => {
    res.status(404).json({
      success: false,
      message: 'Book not found'
    });
}

export {showInternalError, showNotFound};