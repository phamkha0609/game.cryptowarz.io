import { ApolloClient, InMemoryCache } from "@apollo/client";
import { STAKING_REWARDS_SUBGRAPHS } from "../configs/constants";

export const client = new ApolloClient({
	uri: STAKING_REWARDS_SUBGRAPHS,
	cache: new InMemoryCache(),
});
