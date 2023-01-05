import Video from '../models/videos.js';

export const addVideo = (req, res) => {
    const video = req.body;
    Video.collection.insertOne(video)
        .then((data) => {
            console.log(data);
            res.send('Success');
        })
        .catch((err) => {
            console.log(err);
            res.send('Fail');
        });
};

export const otherCtrl = (req, res) => {
    res.send('Seomthing');
};
