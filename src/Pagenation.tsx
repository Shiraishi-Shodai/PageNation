import React, { useState } from "react";
import "./Pagenation.css";
import AlbumList from "./AlbumList";
import { Album } from "../types";
import ReactPaginate from "react-paginate";

interface PagenationProps {
  albums: Album[];
}

const Pagenation: React.FC<PagenationProps> = ({ albums }) => {
  const itemsPerPage = 6;
  // 表示するページごとの最初の配列の番号
  const [itemsOffset, setItemsOffset] = useState(6);

  // 次のページの最初の配列の番号
  const endOffset = itemsOffset + itemsPerPage;
  // 現在のページで表示するアルバムオブジェクト配列
  const currentAlbums = albums.slice(itemsOffset, endOffset);
  const pageCount = Math.ceil(albums.length / itemsPerPage);

  const handlePageClick = (e: { selected: number }) => {
    // console.log(e.selected);
    // ((押されたページ番号 - 1) * 6) % 50
    // 2が押された: ((2 - 1) * 6 ) % 50 = 6
    const newOffset = (e.selected * itemsPerPage) % albums.length;
    setItemsOffset(newOffset);
  };
  return (
    <div className="albumWrapper">
      <AlbumList albums={albums} currentAlbums={currentAlbums} />
      <div className="paginateWrapper">
        <ReactPaginate
          nextLabel="next >"
          onPageChange={handlePageClick}
          pageRangeDisplayed={3}
          marginPagesDisplayed={2}
          pageCount={pageCount}
          previousLabel="< previous"
          pageClassName="page-item"
          pageLinkClassName="page-link"
          previousClassName="page-item"
          previousLinkClassName="page-link"
          nextClassName="page-item"
          nextLinkClassName="page-link"
          breakLabel="..."
          breakClassName="page-item"
          breakLinkClassName="page-link"
          containerClassName="pagination"
          activeClassName="active"
        />
      </div>
    </div>
  );
};

export default Pagenation;
