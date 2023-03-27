import { Error } from "@sveltejs/kit";
import { NPUs } from "$db/NPUs";

/** @type {import('./$types').PageServerLoad} */
export async function load({ props }) {
  const units = await NPUs.find({}).toArray();
  console.log(units);
  return {
    props: {
      units: units
    },
  };
};