import { s as start_mongo } from "./mongo.js";
import mongoose from "mongoose";
mongoose.set("strictQuery", true);
start_mongo().then(() => {
  console.log("Connected!");
}).catch((err) => {
  console.log("Could not connect to the database. Exiting now...", err);
  process.exit();
});
