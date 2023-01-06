import './App.css';
import VideoList from './components/VideoList/VideoList';
import VideoPlayer from './components/VideoPlayer/VideoPlayer';

function App() {
  return (
    <div className="App">
      <VideoPlayer />
      <VideoList />
    </div >
  );
}

export default App;
