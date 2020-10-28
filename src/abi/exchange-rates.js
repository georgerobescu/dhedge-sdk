module.exports = [
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_owner",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "_oracle",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "_resolver",
				"type": "address"
			},
			{
				"internalType": "bytes32[]",
				"name": "_currencyKeys",
				"type": "bytes32[]"
			},
			{
				"internalType": "uint256[]",
				"name": "_newRates",
				"type": "uint256[]"
			}
		],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "constructor",
		"signature": "constructor"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "bytes32",
				"name": "currencyKey",
				"type": "bytes32"
			},
			{
				"indexed": false,
				"internalType": "address",
				"name": "aggregator",
				"type": "address"
			}
		],
		"name": "AggregatorAdded",
		"type": "event",
		"signature": "0x0bcae573430f69c5361e5d76534d3f61d2d803958778680cd74be9dc6299bc63"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "bytes32",
				"name": "currencyKey",
				"type": "bytes32"
			},
			{
				"indexed": false,
				"internalType": "address",
				"name": "aggregator",
				"type": "address"
			}
		],
		"name": "AggregatorRemoved",
		"type": "event",
		"signature": "0xec70e890fc7db7de4059b114c9093a1f41283d18ffcfbcac45566feea4d4f777"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "bytes32",
				"name": "currencyKey",
				"type": "bytes32"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "entryPoint",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "upperLimit",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "lowerLimit",
				"type": "uint256"
			}
		],
		"name": "InversePriceConfigured",
		"type": "event",
		"signature": "0x37efb38e92b0f94698f6df0c9070e2f00946862a042ac09e34ae8c547684240a"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "bytes32",
				"name": "currencyKey",
				"type": "bytes32"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "rate",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "address",
				"name": "initiator",
				"type": "address"
			}
		],
		"name": "InversePriceFrozen",
		"type": "event",
		"signature": "0x3de98bb945f5841b9e27e10a317b59497fa7aab6bc7ba00461fbb3211b550165"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "address",
				"name": "newOracle",
				"type": "address"
			}
		],
		"name": "OracleUpdated",
		"type": "event",
		"signature": "0x3df77beb5db05fcdd70a30fc8adf3f83f9501b68579455adbd100b8180940394"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "address",
				"name": "oldOwner",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "address",
				"name": "newOwner",
				"type": "address"
			}
		],
		"name": "OwnerChanged",
		"type": "event",
		"signature": "0xb532073b38c83145e3e5135377a08bf9aab55bc0fd7c1179cd4fb995d2a5159c"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "address",
				"name": "newOwner",
				"type": "address"
			}
		],
		"name": "OwnerNominated",
		"type": "event",
		"signature": "0x906a1c6bd7e3091ea86693dd029a831c19049ce77f1dce2ce0bab1cacbabce22"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "bytes32",
				"name": "currencyKey",
				"type": "bytes32"
			}
		],
		"name": "RateDeleted",
		"type": "event",
		"signature": "0xe69d655565c7ff1353d8eaeea62fb7904fa9696987431ec351be288c865f1ae1"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "bytes32[]",
				"name": "currencyKeys",
				"type": "bytes32[]"
			},
			{
				"indexed": false,
				"internalType": "uint256[]",
				"name": "newRates",
				"type": "uint256[]"
			}
		],
		"name": "RatesUpdated",
		"type": "event",
		"signature": "0x1bc0fc8997efa076f59b5ef02c315bc5390f7a6d24d661ce12128c01a3b0ba57"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "address",
				"name": "newBeneficiary",
				"type": "address"
			}
		],
		"name": "SelfDestructBeneficiaryUpdated",
		"type": "event",
		"signature": "0xd5da63a0b864b315bc04128dedbc93888c8529ee6cf47ce664dc204339228c53"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "selfDestructDelay",
				"type": "uint256"
			}
		],
		"name": "SelfDestructInitiated",
		"type": "event",
		"signature": "0xcbd94ca75b8dc45c9d80c77e851670e78843c0d75180cb81db3e2158228fa9a6"
	},
	{
		"anonymous": false,
		"inputs": [],
		"name": "SelfDestructTerminated",
		"type": "event",
		"signature": "0x6adcc7125002935e0aa31697538ebbd65cfddf20431eb6ecdcfc3e238bfd082c"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "address",
				"name": "beneficiary",
				"type": "address"
			}
		],
		"name": "SelfDestructed",
		"type": "event",
		"signature": "0x8a09e1677ced846cb537dc2b172043bd05a1a81ad7e0033a7ef8ba762df990b7"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "MAX_ADDRESSES_FROM_RESOLVER",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function",
		"signature": "0xe3235c91"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "SELFDESTRUCT_DELAY",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function",
		"signature": "0xa461fc82"
	},
	{
		"constant": false,
		"inputs": [],
		"name": "acceptOwnership",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function",
		"signature": "0x79ba5097"
	},
	{
		"constant": false,
		"inputs": [
			{
				"internalType": "bytes32",
				"name": "currencyKey",
				"type": "bytes32"
			},
			{
				"internalType": "address",
				"name": "aggregatorAddress",
				"type": "address"
			}
		],
		"name": "addAggregator",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function",
		"signature": "0x3f0e084f"
	},
	{
		"constant": true,
		"inputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "aggregatorKeys",
		"outputs": [
			{
				"internalType": "bytes32",
				"name": "",
				"type": "bytes32"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function",
		"signature": "0x4f72def6"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "aggregatorWarningFlags",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function",
		"signature": "0x4c36b837"
	},
	{
		"constant": true,
		"inputs": [
			{
				"internalType": "bytes32",
				"name": "",
				"type": "bytes32"
			}
		],
		"name": "aggregators",
		"outputs": [
			{
				"internalType": "contract AggregatorV2V3Interface",
				"name": "",
				"type": "address"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function",
		"signature": "0x7103353e"
	},
	{
		"constant": true,
		"inputs": [
			{
				"internalType": "bytes32[]",
				"name": "currencyKeys",
				"type": "bytes32[]"
			}
		],
		"name": "anyRateIsInvalid",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function",
		"signature": "0x0a7d36d1"
	},
	{
		"constant": true,
		"inputs": [
			{
				"internalType": "bytes32",
				"name": "currencyKey",
				"type": "bytes32"
			}
		],
		"name": "canFreezeRate",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function",
		"signature": "0x3375fcd1"
	},
	{
		"constant": true,
		"inputs": [
			{
				"internalType": "address",
				"name": "aggregator",
				"type": "address"
			}
		],
		"name": "currenciesUsingAggregator",
		"outputs": [
			{
				"internalType": "bytes32[]",
				"name": "currencies",
				"type": "bytes32[]"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function",
		"signature": "0x2678df96"
	},
	{
		"constant": true,
		"inputs": [
			{
				"internalType": "bytes32",
				"name": "",
				"type": "bytes32"
			}
		],
		"name": "currencyKeyDecimals",
		"outputs": [
			{
				"internalType": "uint8",
				"name": "",
				"type": "uint8"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function",
		"signature": "0xb295ad34"
	},
	{
		"constant": true,
		"inputs": [
			{
				"internalType": "bytes32",
				"name": "",
				"type": "bytes32"
			}
		],
		"name": "currentRoundForRate",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function",
		"signature": "0x935f4abd"
	},
	{
		"constant": false,
		"inputs": [
			{
				"internalType": "bytes32",
				"name": "currencyKey",
				"type": "bytes32"
			}
		],
		"name": "deleteRate",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function",
		"signature": "0x45938849"
	},
	{
		"constant": true,
		"inputs": [
			{
				"internalType": "bytes32",
				"name": "sourceCurrencyKey",
				"type": "bytes32"
			},
			{
				"internalType": "uint256",
				"name": "sourceAmount",
				"type": "uint256"
			},
			{
				"internalType": "bytes32",
				"name": "destinationCurrencyKey",
				"type": "bytes32"
			}
		],
		"name": "effectiveValue",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "value",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function",
		"signature": "0x654a60ac"
	},
	{
		"constant": true,
		"inputs": [
			{
				"internalType": "bytes32",
				"name": "sourceCurrencyKey",
				"type": "bytes32"
			},
			{
				"internalType": "uint256",
				"name": "sourceAmount",
				"type": "uint256"
			},
			{
				"internalType": "bytes32",
				"name": "destinationCurrencyKey",
				"type": "bytes32"
			}
		],
		"name": "effectiveValueAndRates",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "value",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "sourceRate",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "destinationRate",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function",
		"signature": "0x8295016a"
	},
	{
		"constant": true,
		"inputs": [
			{
				"internalType": "bytes32",
				"name": "sourceCurrencyKey",
				"type": "bytes32"
			},
			{
				"internalType": "uint256",
				"name": "sourceAmount",
				"type": "uint256"
			},
			{
				"internalType": "bytes32",
				"name": "destinationCurrencyKey",
				"type": "bytes32"
			},
			{
				"internalType": "uint256",
				"name": "roundIdForSrc",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "roundIdForDest",
				"type": "uint256"
			}
		],
		"name": "effectiveValueAtRound",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "value",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function",
		"signature": "0x266da16b"
	},
	{
		"constant": false,
		"inputs": [
			{
				"internalType": "bytes32",
				"name": "currencyKey",
				"type": "bytes32"
			}
		],
		"name": "freezeRate",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function",
		"signature": "0xde02795e"
	},
	{
		"constant": true,
		"inputs": [
			{
				"internalType": "bytes32",
				"name": "currencyKey",
				"type": "bytes32"
			}
		],
		"name": "getCurrentRoundId",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function",
		"signature": "0x7a018a1e"
	},
	{
		"constant": true,
		"inputs": [
			{
				"internalType": "bytes32",
				"name": "currencyKey",
				"type": "bytes32"
			},
			{
				"internalType": "uint256",
				"name": "startingRoundId",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "startingTimestamp",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "timediff",
				"type": "uint256"
			}
		],
		"name": "getLastRoundIdBeforeElapsedSecs",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function",
		"signature": "0x109e46a2"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "getResolverAddressesRequired",
		"outputs": [
			{
				"internalType": "bytes32[24]",
				"name": "addressesRequired",
				"type": "bytes32[24]"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function",
		"signature": "0xab49848c"
	},
	{
		"constant": false,
		"inputs": [],
		"name": "initiateSelfDestruct",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function",
		"signature": "0xbd32aa44"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "initiationTime",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function",
		"signature": "0x17c70de4"
	},
	{
		"constant": true,
		"inputs": [
			{
				"internalType": "bytes32",
				"name": "",
				"type": "bytes32"
			}
		],
		"name": "inversePricing",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "entryPoint",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "upperLimit",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "lowerLimit",
				"type": "uint256"
			},
			{
				"internalType": "bool",
				"name": "frozenAtUpperLimit",
				"type": "bool"
			},
			{
				"internalType": "bool",
				"name": "frozenAtLowerLimit",
				"type": "bool"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function",
		"signature": "0x728dec29"
	},
	{
		"constant": true,
		"inputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "invertedKeys",
		"outputs": [
			{
				"internalType": "bytes32",
				"name": "",
				"type": "bytes32"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function",
		"signature": "0x2ea913d4"
	},
	{
		"constant": true,
		"inputs": [
			{
				"internalType": "contract AddressResolver",
				"name": "_resolver",
				"type": "address"
			}
		],
		"name": "isResolverCached",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function",
		"signature": "0x631e1444"
	},
	{
		"constant": true,
		"inputs": [
			{
				"internalType": "bytes32",
				"name": "currencyKey",
				"type": "bytes32"
			}
		],
		"name": "lastRateUpdateTimes",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function",
		"signature": "0xce8480ea"
	},
	{
		"constant": true,
		"inputs": [
			{
				"internalType": "bytes32[]",
				"name": "currencyKeys",
				"type": "bytes32[]"
			}
		],
		"name": "lastRateUpdateTimesForCurrencies",
		"outputs": [
			{
				"internalType": "uint256[]",
				"name": "",
				"type": "uint256[]"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function",
		"signature": "0x05a046e5"
	},
	{
		"constant": false,
		"inputs": [
			{
				"internalType": "address",
				"name": "_owner",
				"type": "address"
			}
		],
		"name": "nominateNewOwner",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function",
		"signature": "0x1627540c"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "nominatedOwner",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function",
		"signature": "0x53a47bb7"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "oracle",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function",
		"signature": "0x7dc0d1d0"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "owner",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function",
		"signature": "0x8da5cb5b"
	},
	{
		"constant": true,
		"inputs": [
			{
				"internalType": "bytes32",
				"name": "currencyKey",
				"type": "bytes32"
			}
		],
		"name": "rateAndInvalid",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "rate",
				"type": "uint256"
			},
			{
				"internalType": "bool",
				"name": "isInvalid",
				"type": "bool"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function",
		"signature": "0x0c71cd23"
	},
	{
		"constant": true,
		"inputs": [
			{
				"internalType": "bytes32",
				"name": "currencyKey",
				"type": "bytes32"
			},
			{
				"internalType": "uint256",
				"name": "roundId",
				"type": "uint256"
			}
		],
		"name": "rateAndTimestampAtRound",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "rate",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "time",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function",
		"signature": "0xfdadbc7e"
	},
	{
		"constant": true,
		"inputs": [
			{
				"internalType": "bytes32",
				"name": "currencyKey",
				"type": "bytes32"
			}
		],
		"name": "rateAndUpdatedTime",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "rate",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "time",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function",
		"signature": "0x4308a94f"
	},
	{
		"constant": true,
		"inputs": [
			{
				"internalType": "bytes32",
				"name": "currencyKey",
				"type": "bytes32"
			}
		],
		"name": "rateForCurrency",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function",
		"signature": "0xac82f608"
	},
	{
		"constant": true,
		"inputs": [
			{
				"internalType": "bytes32",
				"name": "currencyKey",
				"type": "bytes32"
			}
		],
		"name": "rateIsFlagged",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function",
		"signature": "0x38aa1b99"
	},
	{
		"constant": true,
		"inputs": [
			{
				"internalType": "bytes32",
				"name": "currencyKey",
				"type": "bytes32"
			}
		],
		"name": "rateIsFrozen",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function",
		"signature": "0xaf3aea86"
	},
	{
		"constant": true,
		"inputs": [
			{
				"internalType": "bytes32",
				"name": "currencyKey",
				"type": "bytes32"
			}
		],
		"name": "rateIsInvalid",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function",
		"signature": "0x2528f0fe"
	},
	{
		"constant": true,
		"inputs": [
			{
				"internalType": "bytes32",
				"name": "currencyKey",
				"type": "bytes32"
			}
		],
		"name": "rateIsStale",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function",
		"signature": "0x009919c0"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "rateStalePeriod",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function",
		"signature": "0x0ee4951b"
	},
	{
		"constant": true,
		"inputs": [
			{
				"internalType": "bytes32[]",
				"name": "currencyKeys",
				"type": "bytes32[]"
			}
		],
		"name": "ratesAndInvalidForCurrencies",
		"outputs": [
			{
				"internalType": "uint256[]",
				"name": "rates",
				"type": "uint256[]"
			},
			{
				"internalType": "bool",
				"name": "anyRateInvalid",
				"type": "bool"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function",
		"signature": "0xc8e5bbd5"
	},
	{
		"constant": true,
		"inputs": [
			{
				"internalType": "bytes32",
				"name": "currencyKey",
				"type": "bytes32"
			},
			{
				"internalType": "uint256",
				"name": "numRounds",
				"type": "uint256"
			}
		],
		"name": "ratesAndUpdatedTimeForCurrencyLastNRounds",
		"outputs": [
			{
				"internalType": "uint256[]",
				"name": "rates",
				"type": "uint256[]"
			},
			{
				"internalType": "uint256[]",
				"name": "times",
				"type": "uint256[]"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function",
		"signature": "0x2d7371e1"
	},
	{
		"constant": true,
		"inputs": [
			{
				"internalType": "bytes32[]",
				"name": "currencyKeys",
				"type": "bytes32[]"
			}
		],
		"name": "ratesForCurrencies",
		"outputs": [
			{
				"internalType": "uint256[]",
				"name": "",
				"type": "uint256[]"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function",
		"signature": "0xc2c8a676"
	},
	{
		"constant": false,
		"inputs": [
			{
				"internalType": "bytes32",
				"name": "currencyKey",
				"type": "bytes32"
			}
		],
		"name": "removeAggregator",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function",
		"signature": "0x2bed9e0c"
	},
	{
		"constant": false,
		"inputs": [
			{
				"internalType": "bytes32",
				"name": "currencyKey",
				"type": "bytes32"
			}
		],
		"name": "removeInversePricing",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function",
		"signature": "0xc8e6f395"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "resolver",
		"outputs": [
			{
				"internalType": "contract AddressResolver",
				"name": "",
				"type": "address"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function",
		"signature": "0x04f3bcec"
	},
	{
		"constant": true,
		"inputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "resolverAddressesRequired",
		"outputs": [
			{
				"internalType": "bytes32",
				"name": "",
				"type": "bytes32"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function",
		"signature": "0xc6c9d828"
	},
	{
		"constant": false,
		"inputs": [],
		"name": "selfDestruct",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function",
		"signature": "0x9cb8a26a"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "selfDestructBeneficiary",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function",
		"signature": "0xc58aaae6"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "selfDestructInitiated",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function",
		"signature": "0xb8225dec"
	},
	{
		"constant": false,
		"inputs": [
			{
				"internalType": "bytes32",
				"name": "currencyKey",
				"type": "bytes32"
			},
			{
				"internalType": "uint256",
				"name": "entryPoint",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "upperLimit",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "lowerLimit",
				"type": "uint256"
			},
			{
				"internalType": "bool",
				"name": "freezeAtUpperLimit",
				"type": "bool"
			},
			{
				"internalType": "bool",
				"name": "freezeAtLowerLimit",
				"type": "bool"
			}
		],
		"name": "setInversePricing",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function",
		"signature": "0xb199c764"
	},
	{
		"constant": false,
		"inputs": [
			{
				"internalType": "address",
				"name": "_oracle",
				"type": "address"
			}
		],
		"name": "setOracle",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function",
		"signature": "0x7adbf973"
	},
	{
		"constant": false,
		"inputs": [
			{
				"internalType": "contract AddressResolver",
				"name": "_resolver",
				"type": "address"
			}
		],
		"name": "setResolverAndSyncCache",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function",
		"signature": "0x3be99e6f"
	},
	{
		"constant": false,
		"inputs": [
			{
				"internalType": "address payable",
				"name": "_beneficiary",
				"type": "address"
			}
		],
		"name": "setSelfDestructBeneficiary",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function",
		"signature": "0x20714f88"
	},
	{
		"constant": false,
		"inputs": [],
		"name": "terminateSelfDestruct",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function",
		"signature": "0x3278c960"
	},
	{
		"constant": false,
		"inputs": [
			{
				"internalType": "bytes32[]",
				"name": "currencyKeys",
				"type": "bytes32[]"
			},
			{
				"internalType": "uint256[]",
				"name": "newRates",
				"type": "uint256[]"
			},
			{
				"internalType": "uint256",
				"name": "timeSent",
				"type": "uint256"
			}
		],
		"name": "updateRates",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function",
		"signature": "0xbfa005ce"
	}
]
