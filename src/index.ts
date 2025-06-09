import express from 'express';
import connectDB from './config/connectDB';
import booksRouter from './routes/booksRoutes';

process.loadEnvFile();
const PORT = process.env.PORT || 3000;

const app = express();

app.use(express.json());
app.use("/api/books", booksRouter);

app.use("", (req, res) => {
  res.json({success: false, message: "Source not found, go to /api/books"});
})

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
  connectDB();
});