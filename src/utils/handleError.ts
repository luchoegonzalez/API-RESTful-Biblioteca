import {Response} from "express";

const showInternalError = (res: Response, error: Error) => {
    res.status(500).json({
      success: false,
      message: error.message
    });
}

export {showInternalError};