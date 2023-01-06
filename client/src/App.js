import axios from 'axios';
import { useEffect, useState } from 'react';
import './App.css';
import Loading from './components/Loading/Loading';
import VideoList from './components/VideoList/VideoList';
import VideoPlayer from './components/VideoPlayer/VideoPlayer';
import { fetchVideos } from './utils';



function App() {
  const [videos, setVideos] = useState([]);
  const [activeVideo, setActiveVideo] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [nextPage, setNextPage] = useState(1);

  useEffect(() => {
    setIsLoading(true);

    fetchVideos(nextPage).then((data) => {
      if (data.status === axios.HttpStatusCode.Ok) {
        const videos = data.data.data.items
        setVideos(videos)
        setNextPage(prev => prev + 1)
        if (videos.length) setActiveVideo(videos[0]);
      }
    })
      .catch((err) => {
        window.alert("Something went wrong");
      })
      .finally(() => {
        setIsLoading(false);
      })
  }, [])

  return (
    <div className="App">
      {isLoading && <Loading center />}
      {
        !isLoading && <>
          <VideoPlayer video={activeVideo} />
          <VideoList videos={videos} setVideos={setVideos} nextPage={nextPage} setNextPage={setNextPage}/>
        </>
      }
    </div >
  );
}

export default App;
