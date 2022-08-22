import { InjectedConnector } from "@web3-react/injected-connector";
import { NETWORK_SUPPORTED } from "../configs/constants";
import { StaticJsonRpcProvider } from "@ethersproject/providers";
import sample from "lodash/sample";

declare var window: any;
const chainId: number = parseInt(NETWORK_SUPPORTED.chainId.toString(), 10);
const rpcNode: string | undefined = sample(NETWORK_SUPPORTED.rpc);
if (!rpcNode) throw Error("One RPC node is not configured");

export const injected = new InjectedConnector({
	supportedChainIds: [NETWORK_SUPPORTED.chainId],
});

export const simpleRpcProvider: StaticJsonRpcProvider =
	new StaticJsonRpcProvider(NETWORK_SUPPORTED.rpc[0]);

export const setupDefaultNetwork = async () => {
	const provider = window.ethereum;
	if (provider) {
		const _chainId = `0x${chainId.toString(16)}`;
		try {
			await provider.request({
				method: "wallet_switchEthereumChain",
				params: [{ chainId: _chainId }],
			});
		} catch (switchError: any) {
			// This error code indicates that the chain has not been added to MetaMask.
			if (switchError.code === 4902) {
				try {
					await provider.request({
						method: "wallet_addEthereumChain",
						params: [
							{
								chainId: _chainId,
								chainName: NETWORK_SUPPORTED.name,
								nativeCurrency: {
									name: "BNB",
									symbol: "BNB",
									decimals: 18,
								},
								rpcUrls: [rpcNode],
							},
						],
					});
				} catch (error) {
					console.error("Failed to setup the network in Metamask:", error);
					return false;
				}
			}
		}
	} else {
		console.error(
			"Can't setup the network on metamask because window.ethereum is undefined"
		);
		return false;
	}
};
