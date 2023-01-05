import {
    BASE_URL, CRON_INTERVAL,
    MS_PER_SECOND, SEARCH_API_URL
} from '../constants/index.js';
import Video from '../models/videos.js';

const data = {
    kind: 'youtube#searchListResponse',
    etag: 'OlKLo7qiGpO-lhFw3S7FIxKmhvY',
    nextPageToken: 'CAUQAA',
    regionCode: 'IN',
    pageInfo: {
        totalResults: 1000000,
        resultsPerPage: 5
    },
    items: [
        {
            kind: 'youtube#searchResult',
            etag: 'XfukuSEw_N8rf2IMqOnPGnsIQKk',
            id: {
                kind: 'youtube#video',
                videoId: '54c1aJ6Pq_E'
            },
            snippet: {
                publishedAt: '2023-01-05T06:23:30Z',
                channelId: 'UC_GVG-v3LZ587Ti2Qkqc-lg',
                title: '🔴LIVE CRICKET MATCH TODAY | | CRICKET LIVE | IND vs SL | LIVE MATCH TODAY',
                description: 'LIVE CRICKET MATCH TODAY | | CRICKET LIVE | IND vs SL | LIVE MATCH TODAY #wcc3 #worldcricketchampionship3 ...',
                thumbnails: {
                    default: {
                        url: 'https://i.ytimg.com/vi/54c1aJ6Pq_E/default.jpg',
                        width: 120,
                        height: 90
                    },
                    medium: {
                        url: 'https://i.ytimg.com/vi/54c1aJ6Pq_E/mqdefault.jpg',
                        width: 320,
                        height: 180
                    },
                    high: {
                        url: 'https://i.ytimg.com/vi/54c1aJ6Pq_E/hqdefault.jpg',
                        width: 480,
                        height: 360
                    }
                },
                channelTitle: 'Anil Gamerx',
                liveBroadcastContent: 'none',
                publishTime: '2023-01-05T06:23:30Z'
            }
        },
        {
            kind: 'youtube#searchResult',
            etag: 'uBK1aduxvdQryzr-EpGHgVK9UvM',
            id: {
                kind: 'youtube#video',
                videoId: 'n7IOkUgZFeA'
            },
            snippet: {
                publishedAt: '2023-01-05T04:38:57Z',
                channelId: 'UC0gAGB61CKRitiQftgCo4TA',
                title: 'Australia vs South Africa 3rd test Cricket highlights | 3rd test, day 2 | Aus vs Sa day 2 Highlights',
                description: 'Australia vs South Africa 3rd test Cricket highlights | 3rd test, day 2 | Aus vs Sa day 2 Highlights Australia vs South Africa 3rd test ...',
                thumbnails: {
                    default: {
                        url: 'https://i.ytimg.com/vi/n7IOkUgZFeA/default.jpg',
                        width: 120,
                        height: 90
                    },
                    medium: {
                        url: 'https://i.ytimg.com/vi/n7IOkUgZFeA/mqdefault.jpg',
                        width: 320,
                        height: 180
                    },
                    high: {
                        url: 'https://i.ytimg.com/vi/n7IOkUgZFeA/hqdefault.jpg',
                        width: 480,
                        height: 360
                    }
                },
                channelTitle: 'Ibrahim 4 You',
                liveBroadcastContent: 'none',
                publishTime: '2023-01-05T04:38:57Z'
            }
        },
        {
            kind: 'youtube#searchResult',
            etag: '_wH74s74qVxhCxgxD9b1qGtYWpo',
            id: {
                kind: 'youtube#video',
                videoId: 'MhelX9QXIxA'
            },
            snippet: {
                publishedAt: '2023-01-05T03:51:22Z',
                channelId: 'UCevWawWrbw6P9aGY7aMbQ9A',
                title: 'Fastest 1000 Runs In T20 Cricket 🥵🥶 #shorts #youtubeshorts #cricket',
                description: 'Fastest 1000 Runs In T20 Cricket #shorts #youtubeshorts #cricket.',
                thumbnails: {
                    default: {
                        url: 'https://i.ytimg.com/vi/MhelX9QXIxA/default.jpg',
                        width: 120,
                        height: 90
                    },
                    medium: {
                        url: 'https://i.ytimg.com/vi/MhelX9QXIxA/mqdefault.jpg',
                        width: 320,
                        height: 180
                    },
                    high: {
                        url: 'https://i.ytimg.com/vi/MhelX9QXIxA/hqdefault.jpg',
                        width: 480,
                        height: 360
                    }
                },
                channelTitle: 'Cricket Fans 382',
                liveBroadcastContent: 'none',
                publishTime: '2023-01-05T03:51:22Z'
            }
        },
        {
            kind: 'youtube#searchResult',
            etag: 'jftY5WmfM3WHdM-A3-KYvJ_ciQg',
            id: {
                kind: 'youtube#video',
                videoId: 'xjOBe1fEiW0'
            },
            snippet: {
                publishedAt: '2023-01-05T02:56:31Z',
                channelId: 'UCISgnSNwqQ2i8lhCun3KtQg',
                title: 'Today in History | First ODI Cricket Match | इतिहास के पन्नों में | 05 January, 2023',
                description: 'Sansad Television is the Parliamentary channel of India. It was created in 2021 by merging Lok Sabha Television and Rajya ...',
                thumbnails: {
                    default: {
                        url: 'https://i.ytimg.com/vi/xjOBe1fEiW0/default.jpg',
                        width: 120,
                        height: 90
                    },
                    medium: {
                        url: 'https://i.ytimg.com/vi/xjOBe1fEiW0/mqdefault.jpg',
                        width: 320,
                        height: 180
                    },
                    high: {
                        url: 'https://i.ytimg.com/vi/xjOBe1fEiW0/hqdefault.jpg',
                        width: 480,
                        height: 360
                    }
                },
                channelTitle: 'Sansad TV',
                liveBroadcastContent: 'none',
                publishTime: '2023-01-05T02:56:31Z'
            }
        },
        {
            kind: 'youtube#searchResult',
            etag: 'rRXQWQ40vWk720wjCmfiQ59QNg4',
            id: {
                kind: 'youtube#video',
                videoId: 'kW1SOVulUzE'
            },
            snippet: {
                publishedAt: '2023-01-05T01:48:03Z',
                channelId: 'UCYSTnniSPDm4uUkcEAmBQ7w',
                title: 'Sanju Samson Ruled Out From Ongoing T20 Series IND vs SL | Rahul Tripathi Debut | GBB Cricket',
                description: 'Sanju Samson Ruled Out From Ongoing T20 Series IND vs SL | Rahul Tripathi Debut | GBB Cricket Follow us on Instagram: ...',
                thumbnails: {
                    default: {
                        url: 'https://i.ytimg.com/vi/kW1SOVulUzE/default.jpg',
                        width: 120,
                        height: 90
                    },
                    medium: {
                        url: 'https://i.ytimg.com/vi/kW1SOVulUzE/mqdefault.jpg',
                        width: 320,
                        height: 180
                    },
                    high: {
                        url: 'https://i.ytimg.com/vi/kW1SOVulUzE/hqdefault.jpg',
                        width: 480,
                        height: 360
                    }
                },
                channelTitle: 'GBB Cricket',
                liveBroadcastContent: 'none',
                publishTime: '2023-01-05T01:48:03Z'
            }
        }
    ]
};

export const getPublishedAfterDate = () => {
    const now = new Date();
    const myStartDate = new Date(now - CRON_INTERVAL * MS_PER_SECOND);
    return myStartDate.toISOString();
};

export const saveVideos = (videos) => {
    console.log(videos.length);
    Video.insertMany(videos)
        .then(() => {
            console.log('Saved');
        })
        .catch((err) => {
            console.log(err);
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
            q: 'cricket',
            type: 'video',
            key: process.env.YOUTUBE_API_KEY,
            part: 'snippet',
        },
    };
    saveVideos(data.items);
    // axios(config)
    //     .then((response) => {
    //         if (response.status === 200) {
    //             saveVideos(response.videos.snippets);
    //         }
    //     })
    //     .catch((error) => {
    //     });
};
