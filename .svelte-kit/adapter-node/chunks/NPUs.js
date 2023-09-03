import { d as db } from "./mongo.js";
const NPUs = db.collection("npus");
export {
  NPUs as N
};
