import React from 'react';
import Video from '../Video/Video';
import style from './VideoList.module.css';
function VideoList({ videos }) {
    return (
        <div className={style.videoList}>
            {videos.map((video, index) => <Video key={index} video={video} />)}
        </div>
    )
}

export default VideoList