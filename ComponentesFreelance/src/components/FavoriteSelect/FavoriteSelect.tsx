
import { LastSongData, NFT } from '../../data/LastSongData.mock';
import "./FavoriteSelect.scss"

interface FavoriteSelectProps {
  selectedFavorites: NFT[];
  setSelectedFavorites: React.Dispatch<React.SetStateAction<NFT[]>>;
}

export const FavoriteSelect: React.FC<FavoriteSelectProps> = ({
  selectedFavorites,
  setSelectedFavorites,
}) => {
  const toggleFavorite = (assetId: string) => {
    setSelectedFavorites((prevSelected) => {
      if (prevSelected.some((nft) => nft.assetId === assetId)) {
        return prevSelected.filter((nft) => nft.assetId !== assetId);
      } else {
        const nftToAdd = LastSongData.find((nft) => nft.assetId === assetId);
        if (nftToAdd) {
          return [...prevSelected, nftToAdd];
        }
      }
      return prevSelected;
    });
  };

  return (
    <div>
      {LastSongData.map((nft: NFT) => (
        <div key={nft.assetId}>
          <img src={nft.image} alt={nft.name} />
          <button onClick={() => toggleFavorite(nft.assetId)}>
            {selectedFavorites.some((selectedNft) => selectedNft.assetId === nft.assetId)
              ? 'Remove from Favorites'
              : 'Add to Favorites'}
          </button>
        </div>
      ))}
    </div>
  );
};
