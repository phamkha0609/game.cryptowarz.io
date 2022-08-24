import { Contract } from "@ethersproject/contracts";
import { getAddress } from "@ethersproject/address";
import {
	ADDRESS_ZERO,
	BOX_SALE,
	GAME_ADDRESS,
	KING_NFT,
	LAND_NFT,
	STAKING_REWARDS,
	TOKEN_SALE,
} from "../configs/constants";
import GameABI from "../abis/Game.json";
import { Web3Provider } from "@ethersproject/providers";
import { BigNumber } from "ethers";
import BoxSaleABI from "../abis/BoxSale.json";
import IERC20ABI from "../abis/IERC20.json";
import IERC721ABI from "../abis/IERC721.json";
import StakingRewardABI from "../abis/StakingRewards.json";

// returns the checksummed address if the address is valid, otherwise returns false
export function isAddress(value: string) {
	try {
		return getAddress(value);
	} catch {
		return false;
	}
}

// account is not optional
export function getSigner(library: Web3Provider, account: string) {
	return library.getSigner(account).connectUnchecked();
}

// account is optional
export function getProviderOrSigner(
	library: Web3Provider,
	account: string | undefined = undefined
) {
	return account ? getSigner(library, account) : library;
}

// account is optional
export function getContract(
	address: string,
	ABI: any,
	library: Web3Provider,
	account: string | undefined = undefined
): Contract {
	if (!isAddress(address) || address.toString() === ADDRESS_ZERO) {
		throw Error(`Invalid 'address' parameter '${address}'.`);
	}

	if (!library) throw Error("No provider or signer");

	return new Contract(address, ABI, getProviderOrSigner(library, account));
}

export async function callContract(
	contract: Contract,
	method: string,
	args: any[],
	overrides = {}
) {
	try {
		const estimateGas = await contract.estimateGas[method](...args, {
			...overrides,
		});
		const gasLimit = estimateGas.add(
			estimateGas.mul(BigNumber.from("15")).div(BigNumber.from("100"))
		);
		const tx = await contract[method](...args, {
			...overrides,
			gasLimit,
		});
		if (typeof tx.wait !== "function") return tx;
		if (!tx) throw new Error("cannot create transaction");
		return tx.wait();
	} catch (error) {
		throw error;
	}
}

export function getGameContract(
	library: Web3Provider,
	account: string | undefined = undefined
): Contract {
	return getContract(GAME_ADDRESS, GameABI, library, account);
}

export function getBoxSaleContract(
	library: Web3Provider,
	account: string | undefined = undefined
): Contract {
	return getContract(BOX_SALE, BoxSaleABI, library, account);
}

export function getTokenSaleContract(
	library: Web3Provider,
	account: string | undefined = undefined
): Contract {
	return getContract(TOKEN_SALE, IERC20ABI, library, account);
}

export function getLandNFT(
	library: Web3Provider,
	account: string | undefined = undefined
): Contract {
	return getContract(LAND_NFT, IERC721ABI, library, account);
}

export function getKingNFT(
	library: Web3Provider,
	account: string | undefined = undefined
): Contract {
	return getContract(KING_NFT, IERC721ABI, library, account);
}

export function getStakingRewardContract(
	library: Web3Provider,
	account: string | undefined = undefined
): Contract {
	return getContract(STAKING_REWARDS, StakingRewardABI, library, account);
}
