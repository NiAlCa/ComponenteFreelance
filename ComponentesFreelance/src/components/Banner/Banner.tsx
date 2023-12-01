import styles from "./Banner.module.scss"

interface NFT {
  name: string;
  description: string;
  image: string;
  assetId: string;
  collection: string;
  external_url: string;
}


const nftImageUrls = [
  "bafybeiacu2aagvvta6gugcpso4du6veyhbr5sqit44fi66o3qyff6dxhdq/8a4c280e08210a380ad4c4dc1a6ade3b0d41e494dd27e5b659b3e9a91051a858.png",
  "bafybeiacu2aagvvta6gugcpso4du6veyhbr5sqit44fi66o3qyff6dxhdq/invisible.png",
  "bafybeiacu2aagvvta6gugcpso4du6veyhbr5sqit44fi66o3qyff6dxhdq/captain.png",
  "bafybeiacu2aagvvta6gugcpso4du6veyhbr5sqit44fi66o3qyff6dxhdq/c74717a8e6603ce582ef6337e7d623cc956e0241ad48f52e076367d1276e18ff.png",
  "bafybeiacu2aagvvta6gugcpso4du6veyhbr5sqit44fi66o3qyff6dxhdq/d5aafe2cbe44487556bdb09bf1046baaeb46c9303dc8f88b30bc3d0b0364a29e.png",
  "bafybeiacu2aagvvta6gugcpso4du6veyhbr5sqit44fi66o3qyff6dxhdq/0c40b6a9906a151101b624b4887321e014bd4f3a7f065b76103912497572beb0.png",
  "bafybeiacu2aagvvta6gugcpso4du6veyhbr5sqit44fi66o3qyff6dxhdq/d8c44afb5278ddfcacf4be8c136c719f08b98558e52dae8feb6c5a625d4272b1.png",
  "bafybeiacu2aagvvta6gugcpso4du6veyhbr5sqit44fi66o3qyff6dxhdq/df87c3472112f486235e9c437f8cf8b63a06b9a6ef6c6817d284661fc3dbe390.png",
  "bafybeiacu2aagvvta6gugcpso4du6veyhbr5sqit44fi66o3qyff6dxhdq/467fe270fc740acb34e01de6ebbd35b9ceb15c10b187e055225d9d9ed2fc20a6.png",
  "bafybeiacu2aagvvta6gugcpso4du6veyhbr5sqit44fi66o3qyff6dxhdq/ae1ef7012dfdb0882f2077ed5f6362cc123abe0ea334d8e42cd2cdb75972b2d7.png",
  "bafybeiacu2aagvvta6gugcpso4du6veyhbr5sqit44fi66o3qyff6dxhdq/3e96261b47472258a96fe45f5f3bbabc7ebfbca79ea55437e65971a224659a67.png",
];

const Banner: React.FC = () => {

  const favoriteNFTs: NFT[] = nftImageUrls.map((url, index) => ({
    name: `Rusty Robot #${index.toString().padStart(5, '0')}`,
    description: "A collection of 11,111 unique Rusty Robot NFT art pieces on the IOTA network.",
    image: `https://rrcc.mypinata.cloud/ipfs/${url}`,
    assetId: "rusty",
    collection: "Rusty Robot Country Club",
    external_url: "https://rustyrobot.io/collections/RRCC/0"
  }));

  const renderNFTs = () => {
    return favoriteNFTs.slice(0, 10).map((nft, index) => (
      <div key={index} className={styles.nftCard}>
        <img src={nft.image} alt={nft.name} />
        <div className={styles.nftInfo}>
          <h5>{nft.name}</h5>
          <p>{nft.description}</p>
        </div>
      </div>
    ));
  };

  return (
    <div className={styles.favoritesContainer}>
      {renderNFTs()}
    </div>
  );
};

export default Banner;
