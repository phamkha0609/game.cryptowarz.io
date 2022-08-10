import { InjectedConnector } from "@web3-react/injected-connector";
import { RPC_NODE, CHAIN_ID } from "../configs/constants";
import { StaticJsonRpcProvider } from "@ethersproject/providers";

declare var window: any;

export const injected = new InjectedConnector({
  supportedChainIds: [CHAIN_ID],
});

export const simpleRpcProvider: StaticJsonRpcProvider =
  new StaticJsonRpcProvider(RPC_NODE);

export const setupDefaultNetwork = async () => {
  const provider = window.ethereum;
  if (provider) {
    try {
      await provider.request({
        method: "wallet_addEthereumChain",
        params: [
          {
            chainId: `0x${CHAIN_ID.toString(16)}`,
            chainName: "Binance Smart Chain",
            nativeCurrency: {
              name: "BNB",
              symbol: "bnb",
              decimals: 18,
            },
            rpcUrls: [RPC_NODE],
          },
        ],
      });
      return true;
    } catch (error) {
      console.error("Failed to setup the network in Metamask:", error);
      return false;
    }
  } else {
    console.error(
      "Can't setup network on metamask because window.ethereum is undefined"
    );
    return false;
  }
};
