import { gql } from "@apollo/client";

export const GET_STAKING = gql`
	query GetStaking($account: String!) {
		stakes {
			id
			apy
			duration
		}
		userStakes(where: { stakinger: $account }) {
			id
			stakinger
			amount
			start
			claimed
			stake {
				id
				apy
				duration
			}
		}
	}
`;
