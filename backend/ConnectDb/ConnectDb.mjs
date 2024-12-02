import mongoose from 'mongoose';

const connectDb = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGODB_URI);
    console.log("This is URI: " + process.env.MONGODB_URI);
    console.log("Database Connected Successfully!");
  } catch (error) {
    console.log(`${error}`);
    process.exit(1);
  }
};

export default connectDb;
