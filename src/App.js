import { useState } from "react";
import Player from "./components/Player";

function App() {
  
  const[songs , setsongs] = useState([
    {
      title: "Let Me Love You",
      artist: "Emma Heesters",
      img_src: "./images/song1.jpg",
      src: "./music/on-n-on.mp3"
    },
    {
      title: "my_heart-will-go-on",
      artist: "Céline Dion",
      img_src: "./images/song2.jpg",
      src: "./music/my-heart-will-go-on.mp3"
    },
    {
      title: "on-n-on",
      artist: "Justice",
      img_src: "./images/song3.jpg",
      src: "./music/on-n-on.mp3"
    },
    {
      title: "my_heart-will-go-on",
      artist: "Céline Dion",
      img_src: "./images/song4.jpg",
      src: "./music/my-heart-will-go-on.mp3"
    }
  ]);
  const [currentSongIndex, setCurentSongIndex]= useState(0);
  const [nextSongIndex, setNextSongIndex]= useState(currentSongIndex + 1);
  

  
  
  
  
  
  return (
    <div className="App">
      <Player  song={songs[currentSongIndex]}
                nextSong={songs[nextSongIndex]}
      />
    </div>
  );
}

export default App;
