import { connect, disconnect } from "mongoose";

export default async function connectToDatabase() {
  try {
    await connect(process.env.MONGODB_URL);
    console.log("Connected to DB")
  } catch (err) {
    throw new Error("problem conecting with db");
  }
}

async function disconnectDB() {
  try {
    await disconnect();
  } catch (err) {
    throw new Error("Can't disconnect from database");
  }
}
