require("dotenv").config();
require("@nomiclabs/hardhat-ethers");

const {
  ETH_RPC_URL,
  ETH_PRIVATE_KEY,
  BSC_RPC_URL,
  BSC_PRIVATE_KEY,
  POL_RPC_URL,
  POL_PRIVATE_KEY,
} = process.env;

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
  // defaultNetwork: "sepolia",
  // defaultNetwork: "BscTestnet",
  defaultNetwork: "PolTestnet",

  networks: {
    hardhat: {},

    // Ethereum Sepolia
    sepolia: {
      url: ETH_RPC_URL,
      accounts: [`${ETH_PRIVATE_KEY}`],
    },

    // BSC TESTNET
    BscTestnet: {
      url: BSC_RPC_URL,
      accounts: [`${BSC_PRIVATE_KEY}`],
    },

    // POL TESTNET
    PolTestnet: {
      url: POL_RPC_URL,
      accounts: [`${POL_PRIVATE_KEY}`],
    },
  },
};
