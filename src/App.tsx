import { useEffect, useState } from "react";

import "./App.css";
import Pagenation from "./Pagenation";

function App() {
  const [albums, setAlbums] = useState<Album[]>([]);
  useEffect(() => {
    const getAlbums = async () => {
      await fetch("https://jsonplaceholder.typicode.com/albums/1/photos")
        .then((response) => {
          return response.json();
        })
        .then((album) => {
          setAlbums(album);
        });
    };
    getAlbums();
  }, []);

  return (
    <div className="App">
      <Pagenation albums={albums} />
    </div>
  );
}

export default App;
