import { NPUs } from '$db/NPUs';

export async function load({ url }) {

  // find the NPU in the database corresponding to the URL parameter
  const data = await NPUs.findOne({ NPU: url.pathname[1] });
  console.log(url.pathname[1]);
  console.log(JSON.stringify(data));

  return {
    NPUs: JSON.parse(JSON.stringify(data)),
  };
};
