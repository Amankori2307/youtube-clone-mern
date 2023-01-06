import React from 'react';
import Video from '../Video/Video';
import style from './VideoList.module.css';
function VideoList() {
    const videos = [1, 2, 3, 4, 5, 6, 7, 8, 8,];
    return (
        <div className={style.videoList}>
            {videos.map((video, index) => <Video key={index} video={video} />)}
        </div>
    )
}

export default VideoList