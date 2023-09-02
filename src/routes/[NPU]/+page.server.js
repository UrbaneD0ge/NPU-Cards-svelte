import { NPUs } from '$db/NPUs';

export async function load({ route }) {

  // find the NPU in the database corresponding to the URL parameter
  const data = await NPUs.findOne({ NPU: route });
  console.log(route);
  // console.log(JSON.stringify(data));

  return {
    NPUs: JSON.parse(JSON.stringify(data)),
  };
};
