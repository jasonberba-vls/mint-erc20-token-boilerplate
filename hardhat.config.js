require('dotenv').config();
require("@nomiclabs/hardhat-ethers");

const { RPC_URL, PRIVATE_KEY } = process.env;

module.exports = {
  solidity: {
    compilers: [
      {
        version: "0.8.0",
      },
      {
        version: "0.8.20",
        settings: {},
      },
    ],
  },
  defaultNetwork: "sepolia",
  networks: {
    hardhat: {},
    sepolia: {
      url: RPC_URL,
      accounts: [`0x${PRIVATE_KEY}`]
    }
  },
}