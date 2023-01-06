import React from 'react'
import loadingGif from '../../assets/images/loading10.gif'
import style from './Loading.module.css'
function Loading({ center, horizontalCenter, width = 10, height = 10 }) {
    return (
        <div
            className={`${style.loading} ${center ? style.center : ''} ${horizontalCenter ? style.horizontalCenter : ''}`}

        >
            <img
                src={loadingGif}
                alt="loading..."
                style={{
                    width: `${width}rem`,
                    height: `${height}rem`
                }} />
        </div>
    )
}

export default Loading