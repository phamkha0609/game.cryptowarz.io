import { Web3Provider } from "@ethersproject/providers";
import axios from "axios";
import { BigNumber, Contract } from "ethers";
import {
	BOX_SALE,
	HERO,
	HEROs,
	HERO_IDS,
	MAX_UINT256,
	NFT,
	NFTs,
	NFT_IDS,
	PRE_SALE_METHODS,
	ZERO_BN,
} from "../configs/constants";
import {
	callContract,
	getBoxSaleContract,
	getGameContract,
	getKingNFT,
	getLandNFT,
	getTokenSaleContract,
} from "./getContract";

export const buyNFT = async (
	library: Web3Provider,
	account: string,
	nft: number,
	quantity: number
) => {
	try {
		if (!(nft in NFT)) return;
		const gameContract = getGameContract(library, account);
		const value = BigNumber.from(quantity.toString()).mul(
			NFTs[nft as NFT].price
		);
		return callContract(
			gameContract,
			PRE_SALE_METHODS.buyNFT,
			[nft, quantity],
			{ value }
		);
	} catch (error) {
		throw error;
	}
};

export const getOwnNFTs = async (library: Web3Provider, account: string) => {
	try {
		const gameContract = getGameContract(library, account);
		let ids: { hero: HERO; nft: NFT }[] = [];
		for (let hero of HERO_IDS) {
			for (let nft of NFT_IDS) {
				ids = [...ids, { hero, nft }];
			}
		}
		let results: any[] = [];
		await Promise.all(
			ids.map(async (id) => {
				const balance: BigNumber = await callContract(
					gameContract,
					PRE_SALE_METHODS.balances,
					[account, id.nft, id.hero]
				);
				if (!balance.eq(ZERO_BN)) {
					results = [
						...results,
						{
							nft: id.nft,
							hero: id.hero,
							balance,
							image: HEROs[id.hero][id.nft],
						},
					];
				}
			})
		);
		return results;
	} catch (error) {
		throw error;
	}
};

export const approveTokenSale = async (
	library: Web3Provider,
	account: string
) => {
	try {
		const tokenSaleContract = getTokenSaleContract(library, account);
		return callContract(tokenSaleContract, "approve", [BOX_SALE, MAX_UINT256]);
	} catch (error) {
		throw error;
	}
};

export const buyBox = async (
	library: Web3Provider,
	account: string,
	boxId: number
) => {
	try {
		const boxSaleContract = getBoxSaleContract(library, account);
		return callContract(boxSaleContract, "buyBox", [boxId]);
	} catch (error) {
		throw error;
	}
};

export const _getOwnNFTs = async (library: Web3Provider, account: string) => {
	try {
		const landNFT = getLandNFT(library, account);
		const kingNFT = getKingNFT(library, account);
		const [landBalanceOf, kingBalanceOf] = await Promise.all([
			callContract(landNFT, "balanceOf", [account]),
			callContract(kingNFT, "balanceOf", [account]),
		]);
		const landIds = await Promise.all(
			new Array(+landBalanceOf.toString())
				.fill("")
				.map((_, idx) =>
					callContract(landNFT, "tokenOfOwnerByIndex", [account, idx])
				)
		);
		const kingIds = await Promise.all(
			new Array(+kingBalanceOf.toString())
				.fill("")
				.map((_, idx) =>
					callContract(kingNFT, "tokenOfOwnerByIndex", [account, idx])
				)
		);

		const lands = await Promise.all(
			landIds.map(async (id) => {
				const [url, nftClass] = await Promise.all([
					callContract(landNFT, "tokenURI", [id]),
					callContract(landNFT, "classes", [id]),
				]);
				return {
					id,
					nftClass,
					url,
				};
			})
		);
		const kings = await Promise.all(
			kingIds.map(async (id) => {
				const [url, nftClass] = await Promise.all([
					callContract(kingNFT, "tokenURI", [id]),
					callContract(kingNFT, "classes", [id]),
				]);
				const res = await axios.get(url);
				return {
					id,
					nftClass,
					...res.data,
				};
			})
		);
		return { lands, kings };
	} catch (error) {
		throw error;
	}
};

export const getNFT = async (contract: Contract, id: any) => {
	try {
		const [url, nftClass] = await Promise.all([
			callContract(contract, "tokenURI", [id]),
			callContract(contract, "classes", [id]),
		]);
		const res = await axios.get(url);
		return {
			id,
			nftClass,
			...res.data,
		};
	} catch (error) {
		throw error;
	}
};
