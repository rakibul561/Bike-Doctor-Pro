import { Db, MongoClient, ServerApiVersion } from "mongodb";

let db: Db;
export const connectDB = async () => {
  if (db) return db;

  try {
    const uri = process.env.NEXT_PUBLIC_MONGODB_URI;

    if (!uri) {
      throw new Error("MongoDB URI is not defined in environment variables.");
    }

    const client = new MongoClient(uri, {
      serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true, // Correct property for handling deprecations
      },
    });

    db = client.db("bike-doctor");
    return db;
  } catch (error) {
    console.error("Failed to connect to the database:", error);
    throw error;
  }
};
