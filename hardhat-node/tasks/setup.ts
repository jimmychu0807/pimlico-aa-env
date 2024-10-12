import "@nomicfoundation/hardhat-toolbox-viem";
import {
  http,
  type Address,
  createPublicClient,
  createTestClient,
  createWalletClient,
  parseEther,
} from "viem";
import { mnemonicToAccount } from "viem/accounts";
import { sendTransaction } from "viem/actions";
import { hardhat } from "viem/chains";
import { task } from "hardhat/config";

import {
  BICONOMY_ACCOUNT_V2_LOGIC_CREATECALL,
  BICONOMY_DEFAULT_FALLBACK_HANDLER_CREATECALL,
  BICONOMY_ECDSA_OWNERSHIP_REGISTRY_MOUDULE_CREATECALL,
  BICONOMY_FACTORY_CREATECALL,
  BICONOMY_SINGLETON_FACTORY_BYTECODE,
  ENTRY_POINT_SIMULATIONS_CREATECALL,
  ENTRY_POINT_V06_CREATECALL,
  ENTRY_POINT_V07_CREATECALL,
  KERNEL_V06_ACCOUNT_V2_2_LOGIC_CREATECALL,
  KERNEL_V06_ECDSA_VALIDATOR_V2_2_CREATECALL,
  KERNEL_V06_FACTORY_CREATECALL,
  KERNEL_V07_ACCOUNT_V3_LOGIC_CREATECALL,
  KERNEL_V07_ECDSA_VALIDATOR_V3_CREATECALL,
  KERNEL_V07_FACTORY_V3_CREATECALL,
  KERNEL_V07_META_FACTORY_CREATECALL,
  KERNEL_V07_ACCOUNT_V3_1_LOGIC_CREATECALL,
  KERNEL_V07_FACTORY_V3_1_CREATECALL,
  LIGHT_ACCOUNT_FACTORY_V110_CREATECALL,
  SAFE_MULTI_SEND_CALL_ONLY_CREATECALL,
  SAFE_MULTI_SEND_CREATECALL,
  SAFE_PROXY_FACTORY_CREATECALL,
  SAFE_SINGLETON_CREATECALL,
  SAFE_SINGLETON_FACTORY_BYTECODE,
  SAFE_V06_MODULE_CREATECALL,
  SAFE_V06_MODULE_SETUP_CREATECALL,
  SAFE_V07_MODULE_CREATECALL,
  SAFE_V07_MODULE_SETUP_CREATECALL,
  SIMPLE_ACCOUNT_FACTORY_V06_CREATECALL,
  SIMPLE_ACCOUNT_FACTORY_V07_CREATECALL,
} from "alto + contract-deployer/constants";

const DETERMINISTIC_DEPLOYER = "0x4e59b44847b379578588920ca78fbf26c0b4956c";
const SAFE_SINGLETON_FACTORY = "0x914d7Fec6aaC8cd542e72Bca78B30650d45643d7";
const BICONOMY_SINGLETON_FACTORY = "0x988C135a1049Ce61730724afD342fb7C56CD2776";
const MNEMONIC = "test test test test test test test test test test test junk";
const REMOTE_RPC = process.env.REMOTE_RPC ?? "http://localhost:8585";

const walletClient = createWalletClient({
  account: mnemonicToAccount(MNEMONIC),
  chain: hardhat,
  transport: http(REMOTE_RPC)
});

const testClient = createTestClient({
  chain: hardhat,
  mode: "hardhat",
  transport: http(REMOTE_RPC)
});

const publicClient = createPublicClient({
  chain: hardhat,
  transport: http(REMOTE_RPC)
});

task("setup:alto", "Deploy contracts and fund accounts for Pimlico Alto Bundler")
  .setAction(async() => {

  })
