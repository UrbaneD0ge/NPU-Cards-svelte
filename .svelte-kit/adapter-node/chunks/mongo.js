import { MongoClient } from "mongodb";
const MONGO_URL = "mongodb+srv://UrbaneDoge:bPlZ8wc1DQ4cnhQC@cluster0.lojy1rw.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(MONGO_URL);
function start_mongo() {
  console.log("Connecting to MongoDB...");
  return client.connect();
}
const db = client.db();
export {
  db as d,
  start_mongo as s
};
