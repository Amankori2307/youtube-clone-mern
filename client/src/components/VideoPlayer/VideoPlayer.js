import React from 'react';
import style from './VideoPlayer.module.css';

function VideoPlayer({ video }) {
    return (
        <>
            {
                video && <div className={style.videoPlayer}>
                    <div className={style.video}>

                    </div>
                    <div>
                        <h1>{video.snippet.title}</h1>
                        <p>{video.snippet.description}</p>
                    </div>
                </div>
            }
        </>
    )
}

export default VideoPlayer