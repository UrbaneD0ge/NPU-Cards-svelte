import { error } from '@sveltejs/kit';
import { NPU } from '../../models/NPU.js';

const mongoose = require('mongoose');

export async function load({ params }) {
  // find the NPU in the database corresponding to the URL parameter
  const npu = await NPU.findOne({ NPU: req.query.NPU })

  return {
    get: async ({ params }) => {

      const db = mongoose.connection;
      db.on('error', console.error.bind(console, 'connection error:'));
      db.once('open', function () {
        console.log('we are connected!');
      }
      );
      NPU.findOne({ NPU: req.query.NPU }, function (err, npu) {
        if (err) return console.error(err);
        console.log(npu);
      }
      );
      return npu;
    }
  }
};