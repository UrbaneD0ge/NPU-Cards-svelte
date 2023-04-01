import { error } from '@sveltejs/kit';
import { Schema, model } from "mongoose";
import { NPU } from './src/models/NPUs.js';
import { start_mongo } from '$db/mongo';
import { mongoose } from 'mongoose';

export async function load({ params }) {
  // find the NPU in the database corresponding to the URL parameter
  const npu = await NPU.find({ NPU: req.query.NPU })

  return {
    get: async ({ params }) => {

      start_mongo().then(() => {
        console.log('Connected to MongoDB!');
      }).catch(err => {
        console.log('Could not connect to the database. Exiting now...', err);
        process.exit();
      });

      db.on('error', console.error.bind(console, 'connection error:'));
      db.once('open', function () {
        console.log('we are connected!');
      }
      );
      NPU.find({ npu: req.query.NPU }, function (err, npu) {
        if (err) return console.error(err);
        console.log(npu);
      }
      );
      return data;
    }
  }
};