import React, { useRef } from 'react';

interface NFT {
  assetId: string;
  name: string;
  image: string;
}

interface BannerProps {
  selectedFavorites: NFT[];
}

export const Banner: React.FC<BannerProps> = ({ selectedFavorites }) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  const downloadBanner = () => {
    if (canvasRef.current) {
      const canvas = canvasRef.current;
      const ctx = canvas.getContext('2d');

      if (ctx) {
        const bannerWidth = selectedFavorites.length * 200;
        const bannerHeight = 200;
        canvas.width = bannerWidth;
        canvas.height = bannerHeight;

        ctx.clearRect(0, 0, bannerWidth, bannerHeight);

        let x = 0;
        for (const nft of selectedFavorites) {
          const img = new Image();
          img.src = nft.image;
          img.onload = () => {
            ctx.drawImage(img, x, 0, 200, 200);
            x += 200;
          };
        }

        const dataURL = canvas.toDataURL('image/png');

        const link = document.createElement('a');
        link.href = dataURL;
        link.download = 'favorite_banner.png';
        link.click();
      }
    }
  };

  return (
    <div>
      <h2>Your Favorite NFTs</h2>
      <div className="favorites-grid">
        {selectedFavorites.map((nft) => (
          <div key={nft.assetId} className="favorite-item">
            <img src={nft.image} alt={nft.name} />
            <p>{nft.name}</p>
          </div>
        ))}
      </div>
      <button onClick={downloadBanner}>Download Banner</button>
      <canvas ref={canvasRef} style={{ display: 'none' }}></canvas>
    </div>
  );
};
