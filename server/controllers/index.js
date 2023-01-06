import Video from '../models/videos.js';
import { genResponseObject } from '../utils/index.js';

const videoCtrl = {
    getVideos: async (req, res) => {
        const page = req.query.page || 1;
        const pageSize = req.query.pageSize || 5;

        const count = await Video.find({}).count();

        Video.find({})
            .sort({ 'snippet.publishedAt': -1 })
            .limit(pageSize)
            .skip((page - 1) * pageSize)
            .then((videos) => {
                const data = {
                    items: videos,
                    pageInfo: {
                        totalResults: count,
                        resultsPerPage: pageSize,
                    }
                };
                res.status(200).json(genResponseObject(true, false, '', data));
            })
            .catch((err) => {
                console.log('Error while fetching videos from DB');
                console.log(err.message);
                res.status(400).json(genResponseObject(false, true, err.message));
            });
    }
};

export default videoCtrl;
