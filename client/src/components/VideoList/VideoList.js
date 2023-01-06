import axios from 'axios';
import React from 'react';
import InfiniteScroll from "react-infinite-scroll-component";
import { fetchVideos } from '../../utils';
import Video from '../Video/Video';
import style from './VideoList.module.css';



function VideoList({ videos, setVideos, nextPage, setNextPage }) {

    const fetchMoreData = () => {
        fetchVideos(nextPage)
            .then((data) => {
                if (data.status === axios.HttpStatusCode.Ok) {
                    const videos = data.data.data.items
                    setVideos(prev => [...prev, ...videos])
                    setNextPage(prev => prev + 1)
                }
            })
            .catch((err) => {
                window.alert("Something went wrong");
            })
        console.log("Fetch Data")
    }

    return (
        <div id="scrollableDiv" className={style.videoList}>
            <InfiniteScroll
                dataLength={videos.length}
                next={fetchMoreData}
                hasMore={true}
                loader={<h4>Loading...</h4>}
                scrollableTarget="scrollableDiv"
            >
                {videos.map((video, index) => <Video key={index} video={video} />)}

            </InfiniteScroll>
        </div>
    )
}

export default VideoList