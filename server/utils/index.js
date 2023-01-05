import { BASE_URL, CRON_INTERVAL, MS_PER_SECOND, SEARCH_API_URL } from '../constants/index.js';

export const fetchYouTubeVideos = () => {
    const url = `${BASE_URL}${SEARCH_API_URL}`;
    const config = {
        method: 'get',
        url,
        params: {
            order: 'date',
            publishedAfter: getPublishedAfterDate(),
            q: 'cricket',
            type: 'video',
            key: process.env.YOUTUBE_API_KEY,
            part: 'snippet',
        },
    };
    console.log(config)
    // axios(config)
    //     .then((response) => {
    //         console.log(response.status);
    //         console.log(response.data);
    //     })
    //     .catch((error) => {
    //         console.log(error);
    //     });
};

export const getPublishedAfterDate = () => {
    const now = new Date();
    const myStartDate = new Date(now - CRON_INTERVAL * MS_PER_SECOND);
    return myStartDate.toISOString();
};
