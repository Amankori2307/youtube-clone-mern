import dotenv from 'dotenv';
import express from 'express';
import mongoose from 'mongoose';
import cron from 'node-cron';
import { CRON_INTERVAL } from './server/constants/index.js';
import router from './server/routes/index.js';
import { updateVideosInDB } from './server/utils/index.js';

dotenv.config();
const app = express();

// Connecting to database
const uri = process.env.MONGO_URI;
mongoose.set({
    strictQuery: false,
});
mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}, (err) => {
    if (err) console.log(err);
    else console.log('Successfully connection to MongoDB...');
});

// Calling the express.json() method for parsing
app.use(express.json());

// Setting up cron job
cron.schedule(`*/${CRON_INTERVAL} * * * * *`, () => {
    console.log('Starting running fetch youtube videos CRON');
    updateVideosInDB();
    console.log('Finished running fetch youtube videos CRON');
});

// Routes
app.use('/', router);

// Listening to the port
const port = process.env.PORT;
app.listen(port, () => {
    console.log(`Server listenting on port ${port}...`);
});
