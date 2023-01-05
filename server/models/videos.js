import mongoose, { Schema } from 'mongoose';

const thumbnailSchema = new mongoose.Schema({
    url: String,
    width: Number,
    height: Number,
});

const thumbnailsSchema = new mongoose.Schema({
    default: thumbnailSchema,
    medium: thumbnailSchema,
    high: thumbnailSchema,
});

const snippetSchema = new Schema({
    title: String,
    description: String,
    thumbnails: thumbnailsSchema,
    publishedAt: Date,
});

const videoIdShema = new Schema({
    videoId: String
});

const videoSchema = new Schema({
    id: videoIdShema,
    snippet: snippetSchema
}, { timestamps: true });

const Video = mongoose.model('videos', videoSchema);
export default Video;
