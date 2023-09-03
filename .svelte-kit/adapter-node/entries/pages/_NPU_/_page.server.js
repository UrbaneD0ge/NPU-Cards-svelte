import { N as NPUs } from "../../../chunks/NPUs.js";
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
