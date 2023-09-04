import { NPUs } from '$db/NPUs';

export async function load({ context }) {

  // get all NPU data from db
  const data = await NPUs.find().project({ _id: 0 }).sort({ NPU: 'asc' }).toArray();
  // const data = await NPUs.find();
  // console.log(data);

  return {
    NPUs: data,
  };
};
