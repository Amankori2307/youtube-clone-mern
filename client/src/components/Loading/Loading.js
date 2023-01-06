import React from 'react'
import loadingGif from '../../assets/images/loading.gif'
import style from './Loading.module.css'
function Loading({ center }) {
    return (
        <div
            className={`${style.loading}  ${center ? style.center : ''}`}>
            <img
                src={loadingGif}
                alt="loading..." />

        </div>
    )
}

export default Loading