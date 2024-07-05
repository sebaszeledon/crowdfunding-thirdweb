require("@matterlabs/hardhat-zksync-solc");
require("dotenv").config();
require("hardhat-deploy");

const PRIVATE_KEY = process.env.PRIVATE_KEY || "oxkey";

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  zksolc: {
    version: "1.3.9",
    compilerSource: "binary",
    settings: {
      optimizer: {
        enabled: true,
      },
    },
  },
  networks: {
    hardhat: {
      chainId: 31337,
      blockConfirmations: 1,
    },
    sepolia: {
      url: 'https://rpc.ankr.com/eth_sepolia',
        accounts: [`0x${process.env.PRIVATE_KEY}`],
        // chainId: 11155111,
        // blockConfirmations: 2,
        // saveDeployments: true,
    },
  },
  paths: {
    artifacts: "./artifacts-zk",
    cache: "./cache-zk",
    sources: "./contracts",
    tests: "./test",
  },
  solidity: {
    version: "0.8.17",
    defaultNetwork: 'sepolia',
    settings: {
      optimizer: {
        enabled: true,
        runs: 200,
      },
    },
  },
}; //Updated
