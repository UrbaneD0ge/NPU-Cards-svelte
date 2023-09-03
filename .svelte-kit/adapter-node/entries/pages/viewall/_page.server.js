import "../../../chunks/index.js";
import { N as NPUs } from "../../../chunks/NPUs.js";
import { s as start_mongo } from "../../../chunks/mongo.js";
async function load({ props }) {
  start_mongo().then(() => {
    console.log("Connected to MongoDB!");
  }).catch((err) => {
    console.log("Could not connect to the database. Exiting now...", err);
    process.exit();
  });
  const units = await NPUs.findOne({ NPU: req.npu }).toArray();
  console.log(units);
  return {
    props: {
      units
    }
  };
}
export {
  load
};
