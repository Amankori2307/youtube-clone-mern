import axios from 'axios';
import { useEffect, useState } from 'react';
import './App.css';
import Loading from './components/Loading/Loading';
import VideoList from './components/VideoList/VideoList';
import VideoPlayer from './components/VideoPlayer/VideoPlayer';
const BASE_URL = 'http://localhost:5000'



function App() {
  const [videos, setVideos] = useState([]);
  const [activeVideo, setActiveVideo] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    axios.get(`${BASE_URL}/videos?pageSize=20`)
      .then((data) => {
        if (data.status === axios.HttpStatusCode.Ok) {
          const videos = data.data.data.items
          setVideos(videos)
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
          <VideoList videos={videos} />
        </>
      }
    </div >
  );
}

export default App;
