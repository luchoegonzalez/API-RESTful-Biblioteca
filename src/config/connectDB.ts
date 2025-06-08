import {connect} from 'mongoose';

process.loadEnvFile();
const URI_DB = process.env.MONGO_URI || "mongodb://localhost:27017/db-library";

const connectDB = async () => {
  try {
    await connect(URI_DB);
    console.log(`Connected to MongoDB at ${URI_DB}`);
  } catch (error) {
    console.error('MongoDB connection error:', (error as Error).message);
  }
}

export default connectDB;
