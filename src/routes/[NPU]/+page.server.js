import { NPUs } from '$db/NPUs';
import { BSON } from 'mongodb';
// import { Schema, model } from "mongoose";
// import { page } from '$app/stores';

export async function load({ context }) {
  // find the NPU in the database corresponding to the URL parameter
  const data = await NPUs.findOne({ NPU: 'O' });
  // console.log(Request.params);
  console.log(JSON.stringify(data));

  return {
    NPUs: JSON.parse(JSON.stringify(data))
  };
};
