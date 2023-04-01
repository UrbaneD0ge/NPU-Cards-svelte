import { start_mongo } from '$db/mongo';

start_mongo().then(() => {
  console.log('Connected to MongoDB!');
}).catch(err => {
  console.log('Could not connect to the database. Exiting now...', err);
  process.exit();
});