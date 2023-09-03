import { d as db } from "../../../chunks/mongo.js";
const NPUs = db.collection("npus");
async function load({ url }) {
  const data = await NPUs.findOne({ NPU: url.pathname[1] });
  console.log(url.pathname[1]);
  return {
    NPUs: JSON.parse(JSON.stringify(data))
  };
}
export {
  load
};
