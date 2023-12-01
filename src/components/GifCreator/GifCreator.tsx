import React, { useState } from 'react';
import gifshot from 'gifshot';
import { NFT } from '../../data/LastSongData.mock';
import styles from "./GifCreator.module.scss";

interface GenerateGifProps {
  selectedFavorites: NFT[];
}

export const GifCreator: React.FC<GenerateGifProps> = ({ selectedFavorites }) => {
  const [gifPreview, setGifPreview] = useState<string | null>(null);

  const generateAndDownloadGif = () => {
    const images = selectedFavorites.map((nft) => nft.image);

    const interval = 0.5; 

    gifshot.createGIF(
      { images, gifWidth: 300, gifHeight: 300, interval },
      (obj: gifshot.GifshotResult) => {
        if (!obj.error && obj.image) {
          setGifPreview(obj.image);
        }
      }
    );
  };

  const downloadGif = () => {
    if (gifPreview) {
      const a = document.createElement('a');
      a.href = gifPreview;
      a.download = 'favorites.gif';
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
    }
  };

  return (
    <div className={styles['gif-creator-container']}>
      <button className={styles['create-button']} onClick={generateAndDownloadGif}>Generate GIF</button>
      {gifPreview && (
        <div className={styles['gif-content']}>
          <img className={styles['gif-preview']} src={gifPreview} alt="GIF Preview" />
          <button className={styles['download-button']} onClick={downloadGif}>Download GIF</button>
        </div>
      )}
    </div>
  );
};
