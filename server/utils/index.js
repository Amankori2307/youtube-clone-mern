import axios from 'axios';
import {
    BASE_URL, CRON_INTERVAL,
    MS_PER_SECOND, SEARCH_API_URL
} from '../constants/index.js';
import Video from '../models/videos.js';

global.CURRENT_YOUTUBE_KEY = 0;
const QUERY = 'bts | trending | music | cricket | football | sports | fifa';

export const getPublishedAfterDate = () => {
    const now = new Date();
    const myStartDate = new Date(now - CRON_INTERVAL * MS_PER_SECOND);
    return myStartDate.toISOString();
};

export const saveVideos = (videos) => {
    Video.insertMany(videos)
        .then(() => {
            console.log(`Succussfully saved ${videos.length} new videos`);
        })
        .catch((err) => {
        console.log('Error while saving videos');
            console.log(err.message);
        });
};

export const fetchYouTubeVideos = () => {
    const url = `${BASE_URL}${SEARCH_API_URL}`;
    const config = {
        method: 'get',
        url,
        params: {
            order: 'date',
            publishedAfter: getPublishedAfterDate(),
            q: QUERY,
            type: 'video',
            key: process.env.YOUTUBE_API_KEYS.split(' ')[global.CURRENT_YOUTUBE_KEY],
            part: 'snippet',
            maxResults: 50
        },
    };
    return axios(config);
};

export const updateVideosInDB = () => {
    fetchYouTubeVideos()
        .then((response) => {
            if (response.status === 200) {
                const videos = response.data.items;
                console.log(`Found ${videos.length} new videos for query = [${QUERY}]`);
                if (videos.length) {
                    saveVideos(videos);
                }
            }
        })
        .catch((err) => {
            console.log('Error while getting youtube videos...');
            console.log(err.message);
            if (err?.response?.status === 403) {
                global.CURRENT_YOUTUBE_KEY += 1;
            }
        });
};

export const genResponseObject = (success, error, message = '', data = {}) => ({
    success,
    error,
    message,
    data
});
