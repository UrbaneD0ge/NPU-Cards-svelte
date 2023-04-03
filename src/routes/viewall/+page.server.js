import { Error } from "@sveltejs/kit";
import { NPUs } from "$db/NPUs";
import { start_mongo } from '$db/mongo';


/** @type {import('./$types').PageServerLoad} */
export async function load({ props }) {
  start_mongo().then(() => {
    console.log('Connected to MongoDB!');
  }).catch(err => {
    console.log('Could not connect to the database. Exiting now...', err);
    process.exit();
  });

  const units = await NPUs.findOne({ NPU: "W" }).toArray();
  console.log(units);
  return {
    props: {
      units: units
    },
  };
};