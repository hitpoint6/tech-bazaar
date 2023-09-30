import mongoose from "mongoose";

let isConnected = false;

export async function connectToDB(uri: string = process.env.MONGODB_URI || "") {
  mongoose.set("strictQuery", true);

  if (isConnected) {
    console.log("MongoDB is already connected");
    return;
  }

  try {
    await mongoose.connect(uri, {
      dbName: "tech-bazaar",
      useNewUrlParser: true,
      useUnifiedTopology: true,
    } as any);

    isConnected = true;

    console.log("MongoDB connected");
  } catch (error) {
    console.log(error);
  }
}
