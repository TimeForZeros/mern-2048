import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import config from 'config';
import * as routes from './routes';


const app = express();

// Use your dependencies here
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// use all controllers(APIs) herep);
app.use('/', routes);

// Uncomment and modify the route if you want to use any controllers
// app.use('/abc', abcController);
// app.use('/xyz', xyzController);

// Start Anything here
app.listen(config.web.port, () => {
  console.log(`Example app listening on port ${config.web.port}!`);
  mongoose.connect('mongodb://localhost/2048').then(() => {
    console.log('Conneted to mongoDB at port 27017');
  });
});
