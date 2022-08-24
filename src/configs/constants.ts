import { BigNumber } from "ethers";

if (!process.env.REACT_APP_URL) throw Error("App URL is required");

export const APP_URL = process.env.REACT_APP_URL;

if (
	!process.env.REACT_APP_NETWORK_NAME ||
	!process.env.REACT_APP_NETWORK_CHAIN_ID ||
	!process.env.REACT_APP_RPC_NODE_1
)
	throw new Error("Network is not configured");

export const NETWORK_SUPPORTED = {
	name: process.env.REACT_APP_NETWORK_NAME,
	chainId: parseInt(process.env.REACT_APP_NETWORK_CHAIN_ID),
	rpc: [process.env.REACT_APP_RPC_NODE_1],
};

if (
	!process.env.REACT_APP_LAND_NFT ||
	!process.env.REACT_APP_KING_NFT ||
	!process.env.REACT_APP_BOX_SALE ||
	!process.env.REACT_APP_TOKEN_SALE
)
	throw new Error("NFT contract addresses is not configured");
export const LAND_NFT = process.env.REACT_APP_LAND_NFT;
export const KING_NFT = process.env.REACT_APP_KING_NFT;
export const BOX_SALE = process.env.REACT_APP_BOX_SALE;
export const TOKEN_SALE = process.env.REACT_APP_TOKEN_SALE;

if (!process.env.REACT_APP_STAKING_REWARDS)
	throw new Error("Staking contract addresses is not configured");
export const STAKING_REWARDS = process.env.REACT_APP_STAKING_REWARDS;

if (!process.env.REACT_APP_STAKING_REWARDS_SUBGRAPHS)
	throw new Error("Staking subgraphs is not configured");
export const STAKING_REWARDS_SUBGRAPHS =
	process.env.REACT_APP_STAKING_REWARDS_SUBGRAPHS;

export const LAND_TYPES: { [key: string]: string } = {
	0: "Normal",
	1: "Rare",
	2: "Epic",
	3: "Legendary",
	4: "Ultimate",
};

export const KING_TYPES: { [key: string]: string } = {
	0: "Earth",
	1: "Ice",
	2: "Wood",
	3: "Fire",
	4: "Metal",
	5: "Ultimate",
};

export const BOX_NAMES: { [key: string]: string } = {
	0: "NFT LAND",
	1: "NFT KING KETHER",
};

export const GAME_ADDRESS = "0xc037EcC0da5ADD98054598D6E5830efDa40B1A40";

export const PRE_SALE_METHODS = {
	buyNFT: "buyNFT",
	balances: "balances",
};

export enum NFT {
	COMMON,
	RARE,
	SUPER_RARE,
	EPIC,
	LEGEND,
}

export enum HERO {
	TAGGINS,
	KARA,
	FATE,
	SPARAS,
	GRAAFF,
}

export const NFT_IDS: NFT[] = [
	NFT.COMMON,
	NFT.RARE,
	NFT.SUPER_RARE,
	NFT.EPIC,
	NFT.LEGEND,
];
export const HERO_IDS: HERO[] = [
	HERO.TAGGINS,
	HERO.KARA,
	HERO.FATE,
	HERO.SPARAS,
	HERO.GRAAFF,
];

export interface _NFT {
	name: string;
	price: BigNumber;
	image: string;
	heroDrops: { [key in HERO]: number };
}

export const NFTs: { [key in NFT]: _NFT } = {
	[NFT.COMMON]: {
		name: "COMMON",
		price: BigNumber.from("1000000000000000"),
		image:
			"https://res.cloudinary.com/munumber2/image/upload/v1651936213/NFT/box/b1_druqnl.svg",
		heroDrops: {
			[HERO.TAGGINS]: 50.85,
			[HERO.KARA]: 33.9,
			[HERO.FATE]: 10.67,
			[HERO.SPARAS]: 4.49,
			[HERO.GRAAFF]: 0.085,
		},
	},
	[NFT.RARE]: {
		name: "RARE",
		price: BigNumber.from("2000000000000000"),
		image:
			"https://res.cloudinary.com/munumber2/image/upload/v1651936213/NFT/box/b2_sdy88c.svg",
		heroDrops: {
			[HERO.TAGGINS]: 31.65,
			[HERO.KARA]: 43.25,
			[HERO.FATE]: 15.1,
			[HERO.SPARAS]: 8.55,
			[HERO.GRAAFF]: 1.45,
		},
	},
	[NFT.SUPER_RARE]: {
		name: "SUPER RARE",
		price: BigNumber.from("5000000000000000"),
		image:
			"https://res.cloudinary.com/munumber2/image/upload/v1651936214/NFT/box/b3_ywfbwk.svg",
		heroDrops: {
			[HERO.TAGGINS]: 17.15,
			[HERO.KARA]: 28.35,
			[HERO.FATE]: 32.4,
			[HERO.SPARAS]: 15.35,
			[HERO.GRAAFF]: 6.75,
		},
	},
	[NFT.EPIC]: {
		name: "EPIC",
		price: BigNumber.from("10000000000000000"),
		image:
			"https://res.cloudinary.com/munumber2/image/upload/v1651936214/NFT/box/b4_mh5c5o.svg",
		heroDrops: {
			[HERO.TAGGINS]: 3.75,
			[HERO.KARA]: 8.65,
			[HERO.FATE]: 32.85,
			[HERO.SPARAS]: 43.45,
			[HERO.GRAAFF]: 11.3,
		},
	},
	[NFT.LEGEND]: {
		name: "LEGEND",
		price: BigNumber.from("20000000000000000"),
		image:
			"https://res.cloudinary.com/munumber2/image/upload/v1651936213/NFT/box/b5_fzxx7j.svg",
		heroDrops: {
			[HERO.TAGGINS]: 1.2,
			[HERO.KARA]: 2.15,
			[HERO.FATE]: 5.75,
			[HERO.SPARAS]: 39.25,
			[HERO.GRAAFF]: 51.65,
		},
	},
};

export interface _HERO {
	name: string;
	image: string;
	stats: {
		attack: number;
		defense: number;
		speed: number;
		stamina: number;
		range: number;
	};
	desc: string;
}

export const HEROs: { [key in HERO]: { [key in NFT]: _HERO } } = {
	[HERO.TAGGINS]: {
		[NFT.COMMON]: {
			name: "TAGGINS COMMON",
			image:
				"https://res.cloudinary.com/munumber2/image/upload/v1651915123/NFT/heros/hero-01_uifpjg.png",
			stats: {
				attack: 500,
				defense: 800,
				speed: 200,
				stamina: 300,
				range: 450,
			},
			desc: "Taggins is a battle-hardened Captain, equipped with an amazing shield that makes him immune to damage, and loaded with powerful Uranium ammunition. We’ve heard that his suit is able to improve and enhance his defense, even making him capable of dodging attacks",
		},
		[NFT.RARE]: {
			name: "TAGGINS RARE",
			image:
				"https://res.cloudinary.com/munumber2/image/upload/v1651915123/NFT/heros/hero-02_mxle70.png",
			stats: {
				attack: 800,
				defense: 1100,
				speed: 500,
				stamina: 600,
				range: 750,
			},
			desc: "Taggins is a battle-hardened Captain, equipped with an amazing shield that makes him immune to damage, and loaded with powerful Uranium ammunition. We’ve heard that his suit is able to improve and enhance his defense, even making him capable of dodging attacks",
		},
		[NFT.SUPER_RARE]: {
			name: "TAGGINS SUPER RARE",
			image:
				"https://res.cloudinary.com/munumber2/image/upload/v1651915122/NFT/heros/hero-03_bfyezp.png",
			stats: {
				attack: 1300,
				defense: 1600,
				speed: 1000,
				stamina: 1100,
				range: 1250,
			},
			desc: "Taggins is a battle-hardened Captain, equipped with an amazing shield that makes him immune to damage, and loaded with powerful Uranium ammunition. We’ve heard that his suit is able to improve and enhance his defense, even making him capable of dodging attacks",
		},
		[NFT.EPIC]: {
			name: "TAGGINS EPIC",
			image:
				"https://res.cloudinary.com/munumber2/image/upload/v1651915122/NFT/heros/hero-04_hip9qq.png",
			stats: {
				attack: 1900,
				defense: 2200,
				speed: 1600,
				stamina: 1700,
				range: 1850,
			},
			desc: "Taggins is a battle-hardened Captain, equipped with an amazing shield that makes him immune to damage, and loaded with powerful Uranium ammunition. We’ve heard that his suit is able to improve and enhance his defense, even making him capable of dodging attacks",
		},
		[NFT.LEGEND]: {
			name: "TAGGINS LEGEND",
			image:
				"https://res.cloudinary.com/munumber2/image/upload/v1651915122/NFT/heros/hero-05_vjrisx.png",
			stats: {
				attack: 2900,
				defense: 3200,
				speed: 2600,
				stamina: 2700,
				range: 2850,
			},
			desc: "Taggins is a battle-hardened Captain, equipped with an amazing shield that makes him immune to damage, and loaded with powerful Uranium ammunition. We’ve heard that his suit is able to improve and enhance his defense, even making him capable of dodging attacks",
		},
	},
	[HERO.KARA]: {
		[NFT.COMMON]: {
			name: "KARA COMMON",
			image:
				"https://res.cloudinary.com/munumber2/image/upload/v1651915122/NFT/heros/hero-06_ktvrwf.png",
			stats: {
				attack: 500,
				defense: 800,
				speed: 200,
				stamina: 300,
				range: 450,
			},
			desc: "Kara is a hero that excels at shooting down airborne enemies. She was a brilliant mining Engineer on Sagan-1´s colony when it was invaded by the Fell, so she used her knowledge and skills to customize her suit with missile cannons to fight back. She can spin around to attack nearby foes and send her hand made missiles to attack over barriers to make those creatures meet their end",
		},
		[NFT.RARE]: {
			name: "KARA RARE",
			image:
				"https://res.cloudinary.com/munumber2/image/upload/v1651915122/NFT/heros/hero-07_yfeorc.png",
			stats: {
				attack: 800,
				defense: 1100,
				speed: 500,
				stamina: 600,
				range: 750,
			},
			desc: "Kara is a hero that excels at shooting down airborne enemies. She was a brilliant mining Engineer on Sagan-1´s colony when it was invaded by the Fell, so she used her knowledge and skills to customize her suit with missile cannons to fight back. She can spin around to attack nearby foes and send her hand made missiles to attack over barriers to make those creatures meet their end",
		},
		[NFT.SUPER_RARE]: {
			name: "KARA SUPER RARE",
			image:
				"https://res.cloudinary.com/munumber2/image/upload/v1651915122/NFT/heros/hero-08_cvgi5i.png",
			stats: {
				attack: 1300,
				defense: 1600,
				speed: 1000,
				stamina: 1100,
				range: 1250,
			},
			desc: "Kara is a hero that excels at shooting down airborne enemies. She was a brilliant mining Engineer on Sagan-1´s colony when it was invaded by the Fell, so she used her knowledge and skills to customize her suit with missile cannons to fight back. She can spin around to attack nearby foes and send her hand made missiles to attack over barriers to make those creatures meet their end",
		},
		[NFT.EPIC]: {
			name: "KARA EPIC",
			image:
				"https://res.cloudinary.com/munumber2/image/upload/v1651915121/NFT/heros/hero-09_sos81d.png",
			stats: {
				attack: 1900,
				defense: 2200,
				speed: 1600,
				stamina: 1700,
				range: 1850,
			},
			desc: "Kara is a hero that excels at shooting down airborne enemies. She was a brilliant mining Engineer on Sagan-1´s colony when it was invaded by the Fell, so she used her knowledge and skills to customize her suit with missile cannons to fight back. She can spin around to attack nearby foes and send her hand made missiles to attack over barriers to make those creatures meet their end",
		},
		[NFT.LEGEND]: {
			name: "KARA LEGEND",
			image:
				"https://res.cloudinary.com/munumber2/image/upload/v1651915121/NFT/heros/hero-10_xxis3e.png",
			stats: {
				attack: 2900,
				defense: 3200,
				speed: 2600,
				stamina: 2700,
				range: 2850,
			},
			desc: "Kara is a hero that excels at shooting down airborne enemies. She was a brilliant mining Engineer on Sagan-1´s colony when it was invaded by the Fell, so she used her knowledge and skills to customize her suit with missile cannons to fight back. She can spin around to attack nearby foes and send her hand made missiles to attack over barriers to make those creatures meet their end",
		},
	},
	[HERO.FATE]: {
		[NFT.COMMON]: {
			name: "FATE COMMON",
			image:
				"https://res.cloudinary.com/munumber2/image/upload/v1651915121/NFT/heros/hero-11_v0d20t.png",
			stats: {
				attack: 500,
				defense: 800,
				speed: 200,
				stamina: 300,
				range: 450,
			},
			desc: "Fate is the most mysterious Bounty Hunter of the Mercenary Guild, she is lethal, stealthy and cunning. Her advanced cloaking technology hides her from her enemies. She can deploy powerful explosive devices that will not only wipe out all enemies but also leave a toxic cloud or stun those lucky few that survived the blast.",
		},
		[NFT.RARE]: {
			name: "FATE RARE",
			image:
				"https://res.cloudinary.com/munumber2/image/upload/v1651915121/NFT/heros/hero-12_opovsa.png",
			stats: {
				attack: 800,
				defense: 1100,
				speed: 500,
				stamina: 600,
				range: 750,
			},
			desc: "Fate is the most mysterious Bounty Hunter of the Mercenary Guild, she is lethal, stealthy and cunning. Her advanced cloaking technology hides her from her enemies. She can deploy powerful explosive devices that will not only wipe out all enemies but also leave a toxic cloud or stun those lucky few that survived the blast.",
		},
		[NFT.SUPER_RARE]: {
			name: "FATE SUPER RARE",
			image:
				"https://res.cloudinary.com/munumber2/image/upload/v1651915121/NFT/heros/hero-13_b4huc2.png",
			stats: {
				attack: 1300,
				defense: 1600,
				speed: 1000,
				stamina: 1100,
				range: 1250,
			},
			desc: "Fate is the most mysterious Bounty Hunter of the Mercenary Guild, she is lethal, stealthy and cunning. Her advanced cloaking technology hides her from her enemies. She can deploy powerful explosive devices that will not only wipe out all enemies but also leave a toxic cloud or stun those lucky few that survived the blast.",
		},
		[NFT.EPIC]: {
			name: "FATE EPIC",
			image:
				"https://res.cloudinary.com/munumber2/image/upload/v1651915120/NFT/heros/hero-14_fe2ifj.png",
			stats: {
				attack: 1900,
				defense: 2200,
				speed: 1600,
				stamina: 1700,
				range: 1850,
			},
			desc: "Fate is the most mysterious Bounty Hunter of the Mercenary Guild, she is lethal, stealthy and cunning. Her advanced cloaking technology hides her from her enemies. She can deploy powerful explosive devices that will not only wipe out all enemies but also leave a toxic cloud or stun those lucky few that survived the blast.",
		},
		[NFT.LEGEND]: {
			name: "FATE LEGEND",
			image:
				"https://res.cloudinary.com/munumber2/image/upload/v1651915120/NFT/heros/hero-15_myo76q.png",
			stats: {
				attack: 2900,
				defense: 3200,
				speed: 2600,
				stamina: 2700,
				range: 2850,
			},
			desc: "Fate is the most mysterious Bounty Hunter of the Mercenary Guild, she is lethal, stealthy and cunning. Her advanced cloaking technology hides her from her enemies. She can deploy powerful explosive devices that will not only wipe out all enemies but also leave a toxic cloud or stun those lucky few that survived the blast.",
		},
	},
	[HERO.SPARAS]: {
		[NFT.COMMON]: {
			name: "SPARAS COMMON",
			image:
				"https://res.cloudinary.com/munumber2/image/upload/v1651915120/NFT/heros/hero-16_xgfkts.png",
			stats: {
				attack: 500,
				defense: 800,
				speed: 200,
				stamina: 300,
				range: 450,
			},
			desc: "Sparas is an old explorer of unknown worlds that survived the harshest environments and interacted with the most strange alien living forms. He has tamed a few alien beasts to become his faithful companions and aid him in battle. He can either summon Tarrat, able to launch attacks from a great distance or Notadog, a ferocious biter. Sparras is so fearless he tamed a feared sheep from Falx-3, that can damage and stun enemies mercilessly.",
		},
		[NFT.RARE]: {
			name: "SPARAS RARE",
			image:
				"https://res.cloudinary.com/munumber2/image/upload/v1651915120/NFT/heros/hero-17_ismcmg.png",
			stats: {
				attack: 800,
				defense: 1100,
				speed: 500,
				stamina: 600,
				range: 750,
			},
			desc: "Sparas is an old explorer of unknown worlds that survived the harshest environments and interacted with the most strange alien living forms. He has tamed a few alien beasts to become his faithful companions and aid him in battle. He can either summon Tarrat, able to launch attacks from a great distance or Notadog, a ferocious biter. Sparras is so fearless he tamed a feared sheep from Falx-3, that can damage and stun enemies mercilessly.",
		},
		[NFT.SUPER_RARE]: {
			name: "SPARAS SUPER RARE",
			image:
				"https://res.cloudinary.com/munumber2/image/upload/v1651915120/NFT/heros/hero-18_ds8c5f.png",
			stats: {
				attack: 1300,
				defense: 1600,
				speed: 1000,
				stamina: 1100,
				range: 1250,
			},
			desc: "Sparas is an old explorer of unknown worlds that survived the harshest environments and interacted with the most strange alien living forms. He has tamed a few alien beasts to become his faithful companions and aid him in battle. He can either summon Tarrat, able to launch attacks from a great distance or Notadog, a ferocious biter. Sparras is so fearless he tamed a feared sheep from Falx-3, that can damage and stun enemies mercilessly.",
		},
		[NFT.EPIC]: {
			name: "SPARAS EPIC",
			image:
				"https://res.cloudinary.com/munumber2/image/upload/v1651915120/NFT/heros/hero-19_nykaud.png",
			stats: {
				attack: 1900,
				defense: 2200,
				speed: 1600,
				stamina: 1700,
				range: 1850,
			},
			desc: "Sparas is an old explorer of unknown worlds that survived the harshest environments and interacted with the most strange alien living forms. He has tamed a few alien beasts to become his faithful companions and aid him in battle. He can either summon Tarrat, able to launch attacks from a great distance or Notadog, a ferocious biter. Sparras is so fearless he tamed a feared sheep from Falx-3, that can damage and stun enemies mercilessly.",
		},
		[NFT.LEGEND]: {
			name: "SPARAS LEGEND",
			image:
				"https://res.cloudinary.com/munumber2/image/upload/v1651915120/NFT/heros/hero-20_u5eb0u.png",
			stats: {
				attack: 2900,
				defense: 3200,
				speed: 2600,
				stamina: 2700,
				range: 2850,
			},
			desc: "Sparas is an old explorer of unknown worlds that survived the harshest environments and interacted with the most strange alien living forms. He has tamed a few alien beasts to become his faithful companions and aid him in battle. He can either summon Tarrat, able to launch attacks from a great distance or Notadog, a ferocious biter. Sparras is so fearless he tamed a feared sheep from Falx-3, that can damage and stun enemies mercilessly.",
		},
	},
	[HERO.GRAAFF]: {
		[NFT.COMMON]: {
			name: "SPARAS COMMON",
			image:
				"https://res.cloudinary.com/munumber2/image/upload/v1651915119/NFT/heros/hero-21_aiiur6.png",
			stats: {
				attack: 500,
				defense: 800,
				speed: 200,
				stamina: 300,
				range: 450,
			},
			desc: "Dr. Graaff is one of those unexplained and unrepeatable cases that defy science. What began as a military health care robot energized with an alloy of etherium, developed into an autonomous and conscious entity. Too conscious perhaps, since its two main protocols are in constant conflict: Assist and Destroy. In an instant, he can go from firing blasts of deadly rays to reversing almost any kind of injury of his allies (or himself) with emissions from his etherium core. He is assisted by drones that he can overcharge and use almost as missiles as they crash into enemies at command.",
		},
		[NFT.RARE]: {
			name: "SPARAS RARE",
			image:
				"https://res.cloudinary.com/munumber2/image/upload/v1651915119/NFT/heros/hero-22_fvs67z.png",
			stats: {
				attack: 800,
				defense: 1100,
				speed: 500,
				stamina: 600,
				range: 750,
			},
			desc: "Dr. Graaff is one of those unexplained and unrepeatable cases that defy science. What began as a military health care robot energized with an alloy of etherium, developed into an autonomous and conscious entity. Too conscious perhaps, since its two main protocols are in constant conflict: Assist and Destroy. In an instant, he can go from firing blasts of deadly rays to reversing almost any kind of injury of his allies (or himself) with emissions from his etherium core. He is assisted by drones that he can overcharge and use almost as missiles as they crash into enemies at command.",
		},
		[NFT.SUPER_RARE]: {
			name: "SPARAS SUPER RARE",
			image:
				"https://res.cloudinary.com/munumber2/image/upload/v1651915119/NFT/heros/hero-23_zaapiw.png",
			stats: {
				attack: 1300,
				defense: 1600,
				speed: 1000,
				stamina: 1100,
				range: 1250,
			},
			desc: "Dr. Graaff is one of those unexplained and unrepeatable cases that defy science. What began as a military health care robot energized with an alloy of etherium, developed into an autonomous and conscious entity. Too conscious perhaps, since its two main protocols are in constant conflict: Assist and Destroy. In an instant, he can go from firing blasts of deadly rays to reversing almost any kind of injury of his allies (or himself) with emissions from his etherium core. He is assisted by drones that he can overcharge and use almost as missiles as they crash into enemies at command.",
		},
		[NFT.EPIC]: {
			name: "SPARAS EPIC",
			image:
				"https://res.cloudinary.com/munumber2/image/upload/v1651915119/NFT/heros/hero-24_n7uuvm.png",
			stats: {
				attack: 1900,
				defense: 2200,
				speed: 1600,
				stamina: 1700,
				range: 1850,
			},
			desc: "Dr. Graaff is one of those unexplained and unrepeatable cases that defy science. What began as a military health care robot energized with an alloy of etherium, developed into an autonomous and conscious entity. Too conscious perhaps, since its two main protocols are in constant conflict: Assist and Destroy. In an instant, he can go from firing blasts of deadly rays to reversing almost any kind of injury of his allies (or himself) with emissions from his etherium core. He is assisted by drones that he can overcharge and use almost as missiles as they crash into enemies at command.",
		},
		[NFT.LEGEND]: {
			name: "SPARAS LEGEND",
			image:
				"https://res.cloudinary.com/munumber2/image/upload/v1651915119/NFT/heros/hero-25_d6tsc2.png",
			stats: {
				attack: 2900,
				defense: 3200,
				speed: 2600,
				stamina: 2700,
				range: 2850,
			},
			desc: "Dr. Graaff is one of those unexplained and unrepeatable cases that defy science. What began as a military health care robot energized with an alloy of etherium, developed into an autonomous and conscious entity. Too conscious perhaps, since its two main protocols are in constant conflict: Assist and Destroy. In an instant, he can go from firing blasts of deadly rays to reversing almost any kind of injury of his allies (or himself) with emissions from his etherium core. He is assisted by drones that he can overcharge and use almost as missiles as they crash into enemies at command.",
		},
	},
};

export const ADDRESS_ZERO = "0x0000000000000000000000000000000000000000";
export const MAX_UINT256 =
	"0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff";
export const ZERO_BN = BigNumber.from("0");
