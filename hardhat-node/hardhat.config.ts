import type { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox-viem";

import "./tasks/setup";

const config: HardhatUserConfig = {
  solidity: "0.8.27",
};

export default config;
