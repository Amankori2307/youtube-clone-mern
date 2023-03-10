import React from 'react';
import style from './Video.module.css';
function Video({ video, setActiveVideo }) {
    const { snippet } = video;
    const selectVideo = () => {
        window.scrollTo(0, 0)
        setActiveVideo(video)
    }
    return (
        <div className={style.video} onClick={selectVideo}>
            <div className={style.thumbnail} >
                <img src={snippet.thumbnails.default.url} alt={video.id.videoId} />
            </div>
            <div className={style.content}>
                <p className={style.title}>{snippet.title}</p>
                <p className={style.description}>{snippet.description}</p>
            </div>
        </div>
    )
}

export default Video