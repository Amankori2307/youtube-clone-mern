import dotenv from 'dotenv';
import express from 'express';
import mongoose from 'mongoose';

dotenv.config();
const app = express();

// Connecting to database
const uri = process.env.MONGO_URI;
mongoose.set({
    strictQuery: false,
});
mongoose.connect(uri, { useNewUrlParser: true }, () => {
    console.log('Successfly connection to database...');
});

app.use(express.json());

// Creating HTTP Server
const port = process.env.PORT;
app.listen(port, () => {
    console.log(`Listenting on http://127.0.0.1:${port} ...`);
});
