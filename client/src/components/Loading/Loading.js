import React from 'react'
import loadingGif from '../../assets/images/loading5.gif'
import style from './Loading.module.css'
function Loading({ center }) {
    return (
        <div className={`${style.loading} ${center ? style.center : style.red}`}>
            <img src={loadingGif} alt="loading..." />
        </div>
    )
}

export default Loading