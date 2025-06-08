import express from 'express';
import connectDB from './config/connectDB';

process.loadEnvFile();
const PORT = process.env.PORT || 3000;

const app = express();

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
  connectDB();
});