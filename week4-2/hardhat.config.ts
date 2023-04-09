import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import "hardhat-deploy";
import "@nomiclabs/hardhat-etherscan";
import "@openzeppelin/hardhat-upgrades";

import * as dotenv from "dotenv";
dotenv.config();

import "./tasks";

const config: HardhatUserConfig = {
  solidity: "0.8.18",
  namedAccounts: {
    deployer: {
      default: 0,
      localhost: 0,
    },
  },
  defaultNetwork: "hardhat",
  networks: {
    localhost: {
      url: "http://127.0.0.1:8545",
    },
    bsctest: {
      url: process.env.BSCTest_URL || "",
      accounts: process.env.BSC_PRIVATE_KEY !== undefined ? [process.env.BSC_PRIVATE_KEY] : [],
    }
  },
  etherscan: {
    apiKey: {
      bscTestnet: process.env.BSCSCAN_API_KEY || "",
    }
  },
};

export default config;