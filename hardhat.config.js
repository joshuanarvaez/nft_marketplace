const fs = require('fs');

require('dotenv').config();
require('@nomiclabs/hardhat-waffle');

const { NEXT_PUBLIC_API_URL_ALCHEMY } = process.env;


const privateKey = fs.readFileSync('.secret').toString().trim();

module.exports = {
  defaultNetwork: "polygon_mumbai",

  networks: {
    hardhat: {
      chainId: 1337,
    },
    polygon_mumbai: {
      url: NEXT_PUBLIC_API_URL_ALCHEMY,
      accounts: [privateKey],
    },
  },
  solidity: '0.8.4',
};
