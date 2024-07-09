import React from "react";
import "./AlbumList.css";
import { Album } from "../types";

interface AlbumListProps {
  albums: Album[];
  currentAlbums: Album[];
}

const AlbumList: React.FC<AlbumListProps> = ({ albums, currentAlbums }) => {
  return (
    <div className="albumGridWrapper">
      {currentAlbums.map((album, key) => (
        <div key={key}>
          <img src={album.url} alt={album.title} />
        </div>
      ))}
    </div>
  );
};

export default AlbumList;
