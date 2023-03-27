import { set, connect } from 'mongoose';
import { mongoConnect } from '$env/static/private';

set('strictQuery', true);

// Connecting to the database
connect(process.env.mongoConnect, {
  useNewUrlParser: true, useUnifiedTopology: true
}).then(() => {
  console.log("Successfully connected to the database");
}).catch(err => {
  console.log('Could not connect to the database. Exiting now...', err);
  process.exit();
});