import { Db, MongoClient, ServerApiVersion } from "mongodb";

let db: Db;

export const connectDB = async () => {
  if (db) return db;

  try {
    const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.fmdvppd.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;

    if (!uri) {
      throw new Error("MongoDB URI is not defined in environment variables.");
    }

    const client = new MongoClient(uri, {
      serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
      },
    });

    db = client.db("bike-doctor");
    console.log("Connected to MongoDB successfully!"); 
    return db;
  } catch (error) {
    console.error("Failed to connect to the database:", error);
    throw error;
  }
};
