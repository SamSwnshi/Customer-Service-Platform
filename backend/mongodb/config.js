import mongoose from "mongoose";

const config = async () => {
  try {
    await mongoose.connect(process.env.MONGO_DB,{
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("MongoDB connected");
  } catch (error) {
    console.log("Error in Connectiong to MongoDb", error.message);
  }
};

export default config;
