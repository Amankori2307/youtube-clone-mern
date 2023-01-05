import dotenv from 'dotenv';
import express from 'express';
import mongoose from 'mongoose';
import cron from 'node-cron';
import { CRON_INTERVAL } from './server/constants/index.js';
import { fetchYouTubeVideos } from './server/utils/index.js';

dotenv.config();
const app = express();

// Connecting to database
const uri = process.env.MONGO_URI;
mongoose.set({
    strictQuery: false,
});
mongoose.connect(uri, { useNewUrlParser: true }, () => {
    console.log('Successfully connection to database...');
});

// Calling the express.json() method for parsing
app.use(express.json());

// Setting up cron job
cron.schedule(`*/${CRON_INTERVAL} * * * * *`, () => {
    console.log('running a task every second');
    fetchYouTubeVideos();
});

// Listening to the port
const port = process.env.PORT;
app.listen(port, () => {
    console.log(`Server listenting on port ${port}...`);
});
