import axios from 'axios';
import { useEffect, useState } from 'react';
import './App.css';
import VideoList from './components/VideoList/VideoList';
import VideoPlayer from './components/VideoPlayer/VideoPlayer';
const BASE_URL = 'http://localhost:5000'


function App() {
  const [videos, setVideos] = useState([]);
  const [activeVideo, setActiveVideo] = useState(null);
  useEffect(() => {
    axios.get(`${BASE_URL}/videos`)
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
  }, [])

  return (
    <div className="App">
      <VideoPlayer video={activeVideo} />
      <VideoList videos={videos} />
    </div >
  );
}

export default App;
