const dedicatedEndPoint = 'https://jn-nft-zone.infura-ipfs.io';
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: [dedicatedEndPoint, 'jn-nft-zone.infura-ipfs.io'],
  },
  env: {
    IPFS_PROJECT_ID: process.env.NEXT_PUBLIC_IPFS_PROJECT_ID,
    API_KEY_SECRET: process.env.NEXT_PUBLIC_IPFS_PROJECT_ID,
  },
};
module.exports = nextConfig;
