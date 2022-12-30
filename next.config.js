/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: false,
  env: {
    REACT_APP_ENV: process.env.REACT_APP_ENV,
    REACT_APP_CHAIN_ID: process.env.REACT_APP_CHAIN_ID,
    REACT_APP_RPC_URL: process.env.REACT_APP_RPC_URL,
    REACT_CHAIN_NOT_ADDED: process.env.REACT_CHAIN_NOT_ADDED,
    REACT_APP_NETWORK: process.env.REACT_APP_NETWORK,
    REACT_APP_NETWORK_CURRANCY: process.env.REACT_APP_NETWORK_CURRANCY,
    REACT_APP_TRANSACTION_BASE_URL: process.env.REACT_APP_TRANSACTION_BASE_URL,
    ASSET_PREFIX: process.env.ASSET_PREFIX,
    REACT_APP_MAXIMUM_MINT_LIMIT: process.env.REACT_APP_MAXIMUM_MINT_LIMIT,
    REACT_APP_NFT_VOTING_SMART_CONTRACT: process.env.REACT_APP_NFT_VOTING_SMART_CONTRACT,
  },
  assetPrefix: process.env.ASSET_PREFIX,
  images: {
    loader: 'imgix',
    path: '',
  },
};

module.exports = nextConfig;