import { NPUs } from '$db/NPUs';

export async function load({ searchParams }) {

  // find the NPU in the database corresponding to the URL parameter
  const data = await NPUs.findOne({ NPU: 'B' });
  console.log(searchParams);
  // console.log(JSON.stringify(data));

  return {
    NPUs: JSON.parse(JSON.stringify(data)),
  };
};
