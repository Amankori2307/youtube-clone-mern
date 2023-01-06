import React from 'react';
import style from './VideoPlayer.module.css';

function VideoPlayer({ video }) {
    const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`
    return (
        <>
            {
                video && <div className={style.videoPlayer}>
                    <div className={style.video}>
                        <iframe src={videoSrc} title={video.snippet.title} />
                    </div>
                    <div>
                        <h1 className={style.title}>{video.snippet.title}</h1>
                        <p className={style.description}>{video.snippet.description}</p>
                    </div>
                </div>
            }
        </>
    )
}

export default VideoPlayer