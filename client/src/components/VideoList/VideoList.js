import axios from 'axios';
import React from 'react';
import InfiniteScroll from "react-infinite-scroll-component";
import { fetchVideos } from '../../utils';
import Video from '../Video/Video';
import style from './VideoList.module.css';
function VideoList({ videos, setVideos, nextPage, setNextPage, setTotalVideos, totalVideos, setActiveVideo }) {

    const fetchMoreData = () => {
        fetchVideos(nextPage)
            .then((data) => {
                if (data.status === axios.HttpStatusCode.Ok) {
                    const items = data.data.data.items
                    setVideos([...videos, ...items])
                    setNextPage(prev => prev + 1)
                    setTotalVideos(data.data.data.pageInfo.totalResults)
                }
            })
            .catch((err) => {
                window.alert("Something went wrong");
            })
    }

    return (
        <div id="scrollableDiv" className={style.videoList}>
            <InfiniteScroll
                dataLength={videos.length}
                next={fetchMoreData}
                hasMore={totalVideos !== videos.length}
                loader={
                    <p className='loading'>
                        <b>Loading...</b>
                    </p>
                }
                scrollableTarget="scrollableDiv"
                endMessage={
                    <p className='endMessage'>
                        <b>Yay! You have seen it all</b>
                    </p>
                }
            >
                {videos.map((video, index) => <Video key={index} video={video} setActiveVideo={setActiveVideo} />)}

            </InfiniteScroll>
        </div>
    )
}

export default VideoList