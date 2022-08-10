import {
  ADDRESS_ZERO,
  HERO,
  NFT,
  NFTs,
  PRE_SALE_METHODS,
  NFT_IDS,
  HERO_IDS,
  ZERO_BN,
  HEROs,
} from "../configs/constants";
import { getGameContract, callContract, isAddress } from "./getContract";
import { Web3Provider } from "@ethersproject/providers";
import { BigNumber } from "ethers";

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
