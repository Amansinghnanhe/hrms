import mongoose from "mongoose";

const connectDB = async () => {
  const mongoUri = process.env.MONGO_URI;

  if (!mongoUri) {
    throw new Error("MONGO_URI is not defined in .env. Check your dotenv config and file location.");
  }

  try {
    await mongoose.connect(mongoUri);
  } catch (error) {
    console.error("DB Error", error);
    process.exit(1);
  }
};

export default connectDB;
