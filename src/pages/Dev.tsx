import { useState } from "react";
import { NFT } from "../data/LastSongData.mock";
import { FavoriteSelect } from "../components/FavoriteSelect/FavoriteSelect";
import { GifCreator } from "../components/GifCreator/GifCreator";
import Banner from "../components/Banner/Banner";

function Dev() {
  const [selectedFavorites, setSelectedFavorites] = useState<NFT[]>([]);

  return (
    <div>
      <FavoriteSelect
        selectedFavorites={selectedFavorites}
        setSelectedFavorites={setSelectedFavorites}
      />
      <Banner selectedFavorites={selectedFavorites} />
      <GifCreator
      selectedFavorites={selectedFavorites}
      />
    </div>
  );
}

export default Dev;
