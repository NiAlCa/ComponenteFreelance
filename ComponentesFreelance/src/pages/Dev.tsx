import { useState } from 'react';
import {  NFT } from '../data/LastSongData.mock';
import { Banner } from '../components/Banner/Banner';
import { FavoriteSelect } from '../components/FavoriteSelect/FavoriteSelect';

function Dev() {
  const [selectedFavorites, setSelectedFavorites] = useState<NFT[]>([]);

  return (
    <div>
      <FavoriteSelect
        selectedFavorites={selectedFavorites}
        setSelectedFavorites={setSelectedFavorites}
      />
      <Banner selectedFavorites={selectedFavorites} />
    </div>
  );
}

export default Dev;
