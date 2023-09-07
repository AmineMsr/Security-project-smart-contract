require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.0',
  networks: {
    sepolia: {
      url: 'https://eth-sepolia.g.alchemy.com/v2/uR_OE1hslIWD_2BncZW0EcDHy3-3Dnz4',
      accounts: ['3c12a44bb9d5dfd065446247c0e71056c2f2cd7b4caf1a30997de27e87c51930'],
    },
  },
};