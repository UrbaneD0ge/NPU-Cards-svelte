import { Schema, model } from "mongoose";
import { NPUs } from '$db/NPUs';
// import { start_mongo } from '$db/mongo';
import { mongoose } from 'mongoose';

export async function load({ params }) {
  // find the NPU in the database corresponding to the URL parameter
  const data = await NPUs.findOne({ NPU: Request.params });
  console.log('params' + params,'NPU from db:' + NPUs);
  console.log('DB data: ' + data);
  return {
    NPUs: data
  };
};