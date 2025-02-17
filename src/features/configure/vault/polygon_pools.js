export const polygonPools = [
  {
    id: 'aave-wbtc',
    logo: 'single-assets/BTCB.svg',
    name: 'WBTC',
    token: 'WBTC',
    tokenDescription: 'Aave',
    tokenAddress: '0x1BFD67037B42Cf73acF2047067bd4F2C47D9BfD6',
    tokenDecimals: 8,
    tokenDescriptionUrl: '#',
    earnedToken: 'mooAaveWBTC',
    earnedTokenAddress: '0xD3395577febc6AdaB25490a69955ebC47040766C',
    earnContractAddress: '0xD3395577febc6AdaB25490a69955ebC47040766C',
    pricePerFullShare: 1,
    tvl: 0,
    oracle: 'tokens',
    oracleId: 'WBTC',
    oraclePrice: 0,
    depositsPaused: false,
    status: 'active',
    platform: 'Aave',
    assets: ['WBTC'],
    callFee: 0.5,
    buyTokenUrl:
      'https://quickswap.exchange/#/swap?outputCurrency=0x1BFD67037B42Cf73acF2047067bd4F2C47D9BfD6',
  },
  {
    id: 'aave-dai',
    logo: 'single-assets/DAI.svg',
    name: 'DAI',
    token: 'DAI',
    tokenDescription: 'Aave',
    tokenAddress: '0x8f3cf7ad23cd3cadbd9735aff958023239c6a063',
    tokenDecimals: 18,
    tokenDescriptionUrl: '#',
    earnedToken: 'mooAaveDAI',
    earnedTokenAddress: '0x9B36ECeaC46B70ACfB7C2D6F3FD51aEa87C31018',
    earnContractAddress: '0x9B36ECeaC46B70ACfB7C2D6F3FD51aEa87C31018',
    pricePerFullShare: 1,
    tvl: 0,
    oracle: 'tokens',
    oracleId: 'DAI',
    oraclePrice: 0,
    depositsPaused: false,
    status: 'active',
    platform: 'Aave',
    assets: ['DAI'],
    callFee: 0.5,
    buyTokenUrl:
      'https://quickswap.exchange/#/swap?outputCurrency=0x8f3cf7ad23cd3cadbd9735aff958023239c6a063',
  },
  {
    id: 'aave-usdc',
    logo: 'single-assets/USDC.svg',
    name: 'USDC',
    token: 'USDC',
    tokenDescription: 'Aave',
    tokenAddress: '0x2791Bca1f2de4661ED88A30C99A7a9449Aa84174',
    tokenDecimals: 6,
    tokenDescriptionUrl: '#',
    earnedToken: 'mooAaveUSDC',
    earnedTokenAddress: '0xE71f3C11D4535a7F8c5FB03FDA57899B2C9c721F',
    earnContractAddress: '0xE71f3C11D4535a7F8c5FB03FDA57899B2C9c721F',
    pricePerFullShare: 1,
    tvl: 0,
    oracle: 'tokens',
    oracleId: 'USDC',
    oraclePrice: 0,
    depositsPaused: false,
    status: 'active',
    platform: 'Aave',
    assets: ['USDC'],
    callFee: 0.5,
    buyTokenUrl:
      'https://quickswap.exchange/#/swap?outputCurrency=0x2791bca1f2de4661ed88a30c99a7a9449aa84174',
  },
  {
    id: 'aave-eth',
    logo: 'single-assets/ETH.png',
    name: 'ETH',
    token: 'ETH',
    tokenDescription: 'Aave',
    tokenAddress: '0x7ceB23fD6bC0adD59E62ac25578270cFf1b9f619',
    tokenDecimals: 18,
    tokenDescriptionUrl: '#',
    earnedToken: 'mooAaveETH',
    earnedTokenAddress: '0x77276a7c9Ff3a6cbD334524d6F1f6219D039ac0E',
    earnContractAddress: '0x77276a7c9Ff3a6cbD334524d6F1f6219D039ac0E',
    pricePerFullShare: 1,
    tvl: 0,
    oracle: 'tokens',
    oracleId: 'ETH',
    oraclePrice: 0,
    depositsPaused: false,
    status: 'active',
    platform: 'Aave',
    assets: ['ETH'],
    callFee: 0.5,
    buyTokenUrl:
      'https://quickswap.exchange/#/swap?outputCurrency=0x7ceB23fD6bC0adD59E62ac25578270cFf1b9f619',
  },
  {
    id: 'quick-mocean-matic',
    logo: 'polygon/mOCEAN-MATIC.png',
    name: 'mOCEAN-MATIC LP',
    token: 'mOCEAN-MATIC QLP',
    tokenDescription: 'QuickSwap',
    tokenAddress: '0x5a94F81D25c73eDdBDD84b84E8F6D36C58270510',
    tokenDecimals: 18,
    tokenDescriptionUrl: '#',
    earnedToken: 'mooQuickmOCEAN-MATIC',
    earnedTokenAddress: '0x82303a4b2c821204A84AB2a068eC8EDf3Bc23061',
    earnContractAddress: '0x82303a4b2c821204A84AB2a068eC8EDf3Bc23061',
    pricePerFullShare: 1,
    tvl: 0,
    oracle: 'lps',
    oracleId: 'quick-mocean-matic',
    oraclePrice: 0,
    depositsPaused: false,
    status: 'active',
    platform: 'QuickSwap',
    assets: ['mOCEAN', 'MATIC'],
    callFee: 0.5,
    addLiquidityUrl:
      'https://quickswap.exchange/#/add/0x0d500b1d8e8ef31e21c99d1db9a6444d3adf1270/0x282d8efce846a88b159800bd4130ad77443fa1a1',
    buyTokenUrl:
      'https://quickswap.exchange/#/swap?inputCurrency=0x7ceB23fD6bC0adD59E62ac25578270cFf1b9f619&outputCurrency=0x1bfd67037b42cf73acf2047067bd4f2c47d9bfd6',
  },
  {
    id: 'quick-any-quick',
    logo: 'polygon/ANY-QUICK.png',
    name: 'ANY-QUICK LP',
    token: 'ANY-QUICK QLP',
    tokenDescription: 'QuickSwap',
    tokenAddress: '0xeb275d1d930F157504cca7D7AFCe38360C7302b5',
    tokenDecimals: 18,
    tokenDescriptionUrl: '#',
    earnedToken: 'mooQuickANY-QUICK',
    earnedTokenAddress: '0x2849095eE44eCd5f60Ed04f94e5BB45623A8e75a',
    earnContractAddress: '0x2849095eE44eCd5f60Ed04f94e5BB45623A8e75a',
    pricePerFullShare: 1,
    tvl: 0,
    oracle: 'lps',
    oracleId: 'quick-any-quick',
    oraclePrice: 0,
    depositsPaused: false,
    status: 'active',
    platform: 'QuickSwap',
    assets: ['ANY', 'QUICK'],
    callFee: 0.5,
    addLiquidityUrl:
      'https://quickswap.exchange/#/add/0x6ab6d61428fde76768d7b45d8bfeec19c6ef91a8/0x831753dd7087cac61ab5644b308642cc1c33dc13',
    buyTokenUrl:
      'https://quickswap.exchange/#/swap?inputCurrency=0x6ab6d61428fde76768d7b45d8bfeec19c6ef91a8&outputCurrency=0x831753dd7087cac61ab5644b308642cc1c33dc13',
  },
  {
    id: 'quick-frax-quick',
    logo: 'polygon/FRAX-QUICK.png',
    name: 'FRAX-QUICK LP',
    token: 'FRAX-QUICK QLP',
    tokenDescription: 'QuickSwap',
    tokenAddress: '0x2Aa7a18cEAbf2eF893D2f7c0145cC45e6f10b223',
    tokenDecimals: 18,
    tokenDescriptionUrl: '#',
    earnedToken: 'mooQuickFRAX-QUICK',
    earnedTokenAddress: '0x442ca31De7E6732455e60e3641Ac076fa7a0905f',
    earnContractAddress: '0x442ca31De7E6732455e60e3641Ac076fa7a0905f',
    pricePerFullShare: 1,
    tvl: 0,
    oracle: 'lps',
    oracleId: 'quick-frax-quick',
    oraclePrice: 0,
    depositsPaused: false,
    status: 'active',
    platform: 'QuickSwap',
    assets: ['FRAX', 'QUICK'],
    callFee: 0.5,
    addLiquidityUrl:
      'https://quickswap.exchange/#/add/0x104592a158490a9228070e0a8e5343b499e125d0/0x831753dd7087cac61ab5644b308642cc1c33dc13',
    buyTokenUrl:
      'https://quickswap.exchange/#/swap?inputCurrency=0x104592a158490a9228070e0a8e5343b499e125d0&outputCurrency=0x831753dd7087cac61ab5644b308642cc1c33dc13',
  },
  {
    id: 'sushi-aave-eth',
    logo: 'polygon/AAVE-ETH.png',
    name: 'AAVE-ETH LP',
    token: 'AAVE-ETH SLP',
    tokenDescription: 'SushiSwap',
    tokenAddress: '0x2813d43463c374a680f235c428fb1d7f08de0b69',
    tokenDecimals: 18,
    tokenDescriptionUrl: '#',
    earnedToken: 'mooSushiAAVE-ETH',
    earnedTokenAddress: '0x866a910F3375d0dEBDdD904A36B3940aFcD29900',
    earnContractAddress: '0x866a910F3375d0dEBDdD904A36B3940aFcD29900',
    pricePerFullShare: 1,
    tvl: 0,
    oracle: 'lps',
    oracleId: 'sushi-aave-eth',
    oraclePrice: 0,
    depositsPaused: false,
    status: 'active',
    platform: 'SushiSwap',
    assets: ['AAVE', 'ETH'],
    callFee: 0.5,
    addLiquidityUrl:
      'https://app.sushi.com/#/add/0xD6DF932A45C0f255f85145f286eA0b292B21C90B/0x7ceB23fD6bC0adD59E62ac25578270cFf1b9f619',
    buyTokenUrl:
      'https://app.sushi.com/#/swap?inputCurrency=0xD6DF932A45C0f255f85145f286eA0b292B21C90B&outputCurrency=0x7ceB23fD6bC0adD59E62ac25578270cFf1b9f619',
  },
  {
    id: 'sushi-eth-dai',
    logo: 'polygon/ETH-DAI.png',
    name: 'ETH-DAI LP',
    token: 'ETH-DAI SLP',
    tokenDescription: 'SushiSwap',
    tokenAddress: '0x6ff62bfb8c12109e8000935a6de54dad83a4f39f',
    tokenDecimals: 18,
    tokenDescriptionUrl: '#',
    earnedToken: 'mooSushiETH-DAI',
    earnedTokenAddress: '0x6b6ca47520dDC9333B8bD09a1e64204648B63274',
    earnContractAddress: '0x6b6ca47520dDC9333B8bD09a1e64204648B63274',
    pricePerFullShare: 1,
    tvl: 0,
    oracle: 'lps',
    oracleId: 'sushi-eth-dai',
    oraclePrice: 0,
    depositsPaused: false,
    status: 'active',
    platform: 'SushiSwap',
    assets: ['ETH', 'DAI'],
    callFee: 0.5,
    addLiquidityUrl:
      'https://app.sushi.com/#/add/0x7ceB23fD6bC0adD59E62ac25578270cFf1b9f619/0x8f3cf7ad23cd3cadbd9735aff958023239c6a063',
    buyTokenUrl:
      'https://app.sushi.com/#/swap?inputCurrency=0x7ceB23fD6bC0adD59E62ac25578270cFf1b9f619&outputCurrency=0x8f3cf7ad23cd3cadbd9735aff958023239c6a063',
  },
  {
    id: 'sushi-btc-eth',
    logo: 'polygon/ETH-BTC.png',
    name: 'WBTC-ETH LP',
    token: 'WBTC-ETH SLP',
    tokenDescription: 'SushiSwap',
    tokenAddress: '0xe62ec2e799305e0d367b0cc3ee2cda135bf89816',
    tokenDecimals: 18,
    tokenDescriptionUrl: '#',
    earnedToken: 'mooSushiBTC-ETH',
    earnedTokenAddress: '0x6530E351074f1f9fdf254dC7d7d8A44324E158a4',
    earnContractAddress: '0x6530E351074f1f9fdf254dC7d7d8A44324E158a4',
    pricePerFullShare: 1,
    tvl: 0,
    oracle: 'lps',
    oracleId: 'sushi-btc-eth',
    oraclePrice: 0,
    depositsPaused: false,
    status: 'active',
    platform: 'SushiSwap',
    assets: ['WBTC', 'ETH'],
    callFee: 0.5,
    addLiquidityUrl:
      'https://app.sushi.com/#/add/0x1bfd67037b42cf73acf2047067bd4f2c47d9bfd6/0x7ceB23fD6bC0adD59E62ac25578270cFf1b9f619',
    buyTokenUrl:
      'https://app.sushi.com/#/swap?inputCurrency=0x1bfd67037b42cf73acf2047067bd4f2c47d9bfd6&outputCurrency=0x7ceB23fD6bC0adD59E62ac25578270cFf1b9f619',
  },
  {
    id: 'sushi-eth-usdt',
    logo: 'polygon/ETH-USDT.png',
    name: 'ETH-USDT LP',
    token: 'ETH-USDT SLP',
    tokenDescription: 'SushiSwap',
    tokenAddress: '0xc2755915a85c6f6c1c0f3a86ac8c058f11caa9c9',
    tokenDecimals: 18,
    tokenDescriptionUrl: '#',
    earnedToken: 'mooSushiETH-USDT',
    earnedTokenAddress: '0xE8417099971151CD5CfAE264e25634Fac05cA2b3',
    earnContractAddress: '0xE8417099971151CD5CfAE264e25634Fac05cA2b3',
    pricePerFullShare: 1,
    tvl: 0,
    oracle: 'lps',
    oracleId: 'sushi-eth-usdt',
    oraclePrice: 0,
    depositsPaused: false,
    status: 'active',
    platform: 'SushiSwap',
    assets: ['ETH', 'USDT'],
    callFee: 0.5,
    addLiquidityUrl:
      'https://app.sushi.com/#/add/0x7ceB23fD6bC0adD59E62ac25578270cFf1b9f619/0xc2132D05D31c914a87C6611C10748AEb04B58e8F',
    buyTokenUrl:
      'https://app.sushi.com/#/swap?inputCurrency=0x7ceB23fD6bC0adD59E62ac25578270cFf1b9f619&outputCurrency=0xc2132D05D31c914a87C6611C10748AEb04B58e8F',
  },
  {
    id: 'sushi-usdc-eth',
    logo: 'polygon/USDC-ETH.png',
    name: 'USDC-ETH LP',
    token: 'USDC-ETH SLP',
    tokenDescription: 'SushiSwap',
    tokenAddress: '0x34965ba0ac2451a34a0471f04cca3f990b8dea27',
    tokenDecimals: 18,
    tokenDescriptionUrl: '#',
    earnedToken: 'mooSushiUSDC-ETH',
    earnedTokenAddress: '0xE4DB97A2AAFbfef40D1a4AE8B709f61d6756F8e1',
    earnContractAddress: '0xE4DB97A2AAFbfef40D1a4AE8B709f61d6756F8e1',
    pricePerFullShare: 1,
    tvl: 0,
    oracle: 'lps',
    oracleId: 'sushi-usdc-eth',
    oraclePrice: 0,
    depositsPaused: false,
    status: 'active',
    platform: 'SushiSwap',
    assets: ['USDC', 'ETH'],
    callFee: 0.5,
    addLiquidityUrl:
      'https://app.sushi.com/#/add/0x2791Bca1f2de4661ED88A30C99A7a9449Aa84174/0x7ceB23fD6bC0adD59E62ac25578270cFf1b9f619',
    buyTokenUrl:
      'https://app.sushi.com/#/swap?inputCurrency=0x2791Bca1f2de4661ED88A30C99A7a9449Aa84174&outputCurrency=0x7ceB23fD6bC0adD59E62ac25578270cFf1b9f619',
  },
  {
    id: 'sushi-matic-eth',
    logo: 'polygon/ETH-MATIC.png',
    name: 'MATIC-ETH LP',
    token: 'MATIC-ETH SLP',
    tokenDescription: 'SushiSwap',
    tokenAddress: '0xc4e595acdd7d12fec385e5da5d43160e8a0bac0e',
    tokenDecimals: 18,
    tokenDescriptionUrl: '#',
    earnedToken: 'mooSushiMATIC-ETH',
    earnedTokenAddress: '0xC8e809a9180d637Cc23dAf60b41B70CA1ad5Fc08',
    earnContractAddress: '0xC8e809a9180d637Cc23dAf60b41B70CA1ad5Fc08',
    pricePerFullShare: 1,
    tvl: 0,
    oracle: 'lps',
    oracleId: 'sushi-matic-eth',
    oraclePrice: 0,
    depositsPaused: false,
    status: 'active',
    platform: 'SushiSwap',
    assets: ['MATIC', 'ETH'],
    callFee: 0.5,
    addLiquidityUrl:
      'https://app.sushi.com/#/add/0x0d500b1d8e8ef31e21c99d1db9a6444d3adf1270/0x7ceB23fD6bC0adD59E62ac25578270cFf1b9f619',
    buyTokenUrl:
      'https://app.sushi.com/#/swap?inputCurrency=0x0d500b1d8e8ef31e21c99d1db9a6444d3adf1270&outputCurrency=0x7ceB23fD6bC0adD59E62ac25578270cFf1b9f619',
  },
  {
    id: 'cometh-azuki-eth',
    logo: 'polygon/AZUKI-ETH.png',
    name: 'AZUKI-ETH LP',
    token: 'AZUKI-ETH LP',
    tokenDescription: 'Cometh',
    tokenAddress: '0x92Bb3233F59561FC1fEC53EfC3339E4Af8E917F4',
    tokenDecimals: 18,
    tokenDescriptionUrl: '#',
    earnedToken: 'mooComethAZUKI-ETH',
    earnedTokenAddress: '0xe95d14D09a8F6034C582bd993A2F2aA8ecEC72f0',
    earnContractAddress: '0xe95d14D09a8F6034C582bd993A2F2aA8ecEC72f0',
    pricePerFullShare: 1,
    tvl: 0,
    oracle: 'lps',
    oracleId: 'cometh-azuki-eth',
    oraclePrice: 0,
    depositsPaused: false,
    status: 'active',
    platform: 'Cometh',
    assets: ['AZUKI', 'ETH'],
    callFee: 0.5,
    addLiquidityUrl:
      'https://swap.cometh.io/#/add/0x7CdC0421469398e0F3aA8890693d86c840Ac8931/0x7ceb23fd6bc0add59e62ac25578270cff1b9f619',
    buyTokenUrl:
      'https://swap.cometh.io/#/swap?inputCurrency=0x7ceb23fd6bc0add59e62ac25578270cff1b9f619&outputCurrency=0x7CdC0421469398e0F3aA8890693d86c840Ac8931',
  },
  {
    id: 'cometh-doki-eth',
    logo: 'polygon/DOKI-ETH.png',
    name: 'DOKI-ETH LP',
    token: 'DOKI-ETH LP',
    tokenDescription: 'Cometh',
    tokenAddress: '0xcCeD5cB001D6081c4561bf7911F11Ccd9aAA1474',
    tokenDecimals: 18,
    tokenDescriptionUrl: '#',
    earnedToken: 'mooComethDOKI-ETH',
    earnedTokenAddress: '0x383489a0A5deA3f1499c638e0258F7e6a68a253f',
    earnContractAddress: '0x383489a0A5deA3f1499c638e0258F7e6a68a253f',
    pricePerFullShare: 1,
    tvl: 0,
    oracle: 'lps',
    oracleId: 'cometh-doki-eth',
    oraclePrice: 0,
    depositsPaused: false,
    status: 'active',
    platform: 'Cometh',
    assets: ['DOKI', 'ETH'],
    callFee: 0.5,
    addLiquidityUrl:
      'https://swap.cometh.io/#/add/0x5C7F7Fe4766fE8f0fa9b41E2E4194d939488ff1C/0x7ceb23fd6bc0add59e62ac25578270cff1b9f619',
    buyTokenUrl:
      'https://swap.cometh.io/#/swap?inputCurrency=0x7ceb23fd6bc0add59e62ac25578270cff1b9f619&outputCurrency=0x5C7F7Fe4766fE8f0fa9b41E2E4194d939488ff1C',
  },
  {
    id: 'quick-usdc-usdt',
    logo: 'polygon/USDC-USDT.png',
    name: 'USDC-USDT LP',
    token: 'USDC-USDT QLP',
    tokenDescription: 'QuickSwap',
    tokenAddress: '0x2cf7252e74036d1da831d11089d326296e64a728',
    tokenDecimals: 18,
    tokenDescriptionUrl: '#',
    earnedToken: 'mooQuickUSDC-USDT',
    earnedTokenAddress: '0x4462817b53E76b722c2D174D0148ddb81452f1dE',
    earnContractAddress: '0x4462817b53E76b722c2D174D0148ddb81452f1dE',
    pricePerFullShare: 1,
    tvl: 0,
    oracle: 'lps',
    oracleId: 'quick-usdc-usdt',
    oraclePrice: 0,
    depositsPaused: false,
    status: 'active',
    platform: 'QuickSwap',
    assets: ['USDC', 'USDT'],
    callFee: 0.5,
    addLiquidityUrl:
      'https://quickswap.exchange/#/add/0x2791Bca1f2de4661ED88A30C99A7a9449Aa84174/0xc2132D05D31c914a87C6611C10748AEb04B58e8F',
    buyTokenUrl:
      'https://quickswap.exchange/#/swap?inputCurrency=0x2791bca1f2de4661ed88a30c99a7a9449aa84174&outputCurrency=0xc2132d05d31c914a87c6611c10748aeb04b58e8f',
  },
  {
    id: 'cometh-must-eth',
    logo: 'polygon/MUST-ETH.png',
    name: 'MUST-ETH LP',
    token: 'MUST-ETH LP',
    tokenDescription: 'Cometh',
    tokenAddress: '0x8826C072657983939c26E684edcfb0e4133f0B3d',
    tokenDecimals: 18,
    tokenDescriptionUrl: '#',
    earnedToken: 'mooComethMUST-ETH',
    earnedTokenAddress: '0x7CE2332fAF6328986C75e3A8fCc1CB79621aeB1F',
    earnContractAddress: '0x7CE2332fAF6328986C75e3A8fCc1CB79621aeB1F',
    pricePerFullShare: 1,
    tvl: 0,
    oracle: 'lps',
    oracleId: 'cometh-must-eth',
    oraclePrice: 0,
    depositsPaused: false,
    status: 'active',
    platform: 'Cometh',
    assets: ['MUST', 'ETH'],
    callFee: 0.5,
    addLiquidityUrl:
      'https://swap.cometh.io/#/add/0x9C78EE466D6Cb57A4d01Fd887D2b5dFb2D46288f/0x7ceb23fd6bc0add59e62ac25578270cff1b9f619',
    buyTokenUrl:
      'https://swap.cometh.io/#/swap?inputCurrency=0x7ceb23fd6bc0add59e62ac25578270cff1b9f619&outputCurrency=0x9c78ee466d6cb57a4d01fd887d2b5dfb2d46288f',
  },
  {
    id: 'quick-eth-btc',
    logo: 'polygon/ETH-BTC.png',
    name: 'WBTC-ETH LP',
    token: 'WBTC-ETH QLP',
    tokenDescription: 'QuickSwap',
    tokenAddress: '0xdc9232e2df177d7a12fdff6ecbab114e2231198d',
    tokenDecimals: 18,
    tokenDescriptionUrl: '#',
    earnedToken: 'mooQuickwBTC-ETH',
    earnedTokenAddress: '0xf26607237355D7c6183ea66EC908729E9c6eEB6b',
    earnContractAddress: '0xf26607237355D7c6183ea66EC908729E9c6eEB6b',
    pricePerFullShare: 1,
    tvl: 0,
    oracle: 'lps',
    oracleId: 'quick-eth-btc',
    oraclePrice: 0,
    depositsPaused: false,
    status: 'active',
    platform: 'QuickSwap',
    assets: ['WBTC', 'ETH'],
    callFee: 0.5,
    addLiquidityUrl:
      'https://quickswap.exchange/#/add/0x1bfd67037b42cf73acf2047067bd4f2c47d9bfd6/0x7ceB23fD6bC0adD59E62ac25578270cFf1b9f619',
    buyTokenUrl:
      'https://quickswap.exchange/#/swap?inputCurrency=0x7ceB23fD6bC0adD59E62ac25578270cFf1b9f619&outputCurrency=0x1bfd67037b42cf73acf2047067bd4f2c47d9bfd6',
  },
  {
    id: 'quick-ubt-eth',
    logo: 'polygon/UBT-ETH.png',
    name: 'UBT-ETH LP',
    token: 'UBT-ETH QLP',
    tokenDescription: 'QuickSwap',
    tokenAddress: '0xcc203f45A31aE086218170F6A9e9623fA1655486',
    tokenDecimals: 18,
    tokenDescriptionUrl: '#',
    earnedToken: 'mooQuickUBT-ETH',
    earnedTokenAddress: '0x942aa6324E5D0C102d3Ad6607495ac5e798a991a',
    earnContractAddress: '0x942aa6324E5D0C102d3Ad6607495ac5e798a991a',
    pricePerFullShare: 1,
    tvl: 0,
    oracle: 'lps',
    oracleId: 'quick-ubt-eth',
    oraclePrice: 0,
    depositsPaused: false,
    status: 'active',
    platform: 'QuickSwap',
    assets: ['UBT', 'ETH'],
    callFee: 0.5,
    addLiquidityUrl:
      'https://quickswap.exchange/#/add/0x7ceB23fD6bC0adD59E62ac25578270cFf1b9f619/0x7FBc10850caE055B27039aF31bD258430e714c62',
    buyTokenUrl:
      'https://quickswap.exchange/#/swap?inputCurrency=0x7ceB23fD6bC0adD59E62ac25578270cFf1b9f619&outputCurrency=0x7FBc10850caE055B27039aF31bD258430e714c62',
  },
  {
    id: 'quick-defi5-eth',
    logo: 'polygon/DEFI5-ETH.png',
    name: 'DEFI5-ETH LP',
    token: 'DEFI5-ETH QLP',
    tokenDescription: 'QuickSwap',
    tokenAddress: '0x654E651b658f784406125400cf648588CB9773e8',
    tokenDecimals: 18,
    tokenDescriptionUrl: '#',
    earnedToken: 'mooQuickDEFI5-ETH',
    earnedTokenAddress: '0x53e674D5cC969930420d73E4b79Ee0D46cCdf6c4',
    earnContractAddress: '0x53e674D5cC969930420d73E4b79Ee0D46cCdf6c4',
    pricePerFullShare: 1,
    tvl: 0,
    oracle: 'lps',
    oracleId: 'quick-defi5-eth',
    oraclePrice: 0,
    depositsPaused: false,
    status: 'active',
    platform: 'QuickSwap',
    assets: ['DEFI5', 'ETH'],
    callFee: 0.5,
    addLiquidityUrl:
      'https://quickswap.exchange/#/add/0x7ceB23fD6bC0adD59E62ac25578270cFf1b9f619/0x42435F467D33e5C4146a4E8893976ef12BBCE762',
    buyTokenUrl:
      'https://quickswap.exchange/#/swap?inputCurrency=0x7ceB23fD6bC0adD59E62ac25578270cFf1b9f619&outputCurrency=0x42435F467D33e5C4146a4E8893976ef12BBCE762',
  },
  {
    id: 'quick-wise-eth',
    logo: 'polygon/WISE-ETH.png',
    name: 'WISE-ETH LP',
    token: 'WISE-ETH QLP',
    tokenDescription: 'QuickSwap',
    tokenAddress: '0xDF8139e9BebecAdEcF48BeC8c8064CcEfB618e2b',
    tokenDecimals: 18,
    tokenDescriptionUrl: '#',
    earnedToken: 'mooQuickWISE-ETH',
    earnedTokenAddress: '0x76cE86B1e1b7a3983B26F7E57B2A0C8896f7eB0D',
    earnContractAddress: '0x76cE86B1e1b7a3983B26F7E57B2A0C8896f7eB0D',
    pricePerFullShare: 1,
    tvl: 0,
    oracle: 'lps',
    oracleId: 'quick-wise-eth',
    oraclePrice: 0,
    depositsPaused: false,
    status: 'active',
    platform: 'QuickSwap',
    assets: ['WISE', 'ETH'],
    callFee: 0.5,
    addLiquidityUrl:
      'https://quickswap.exchange/#/add/0x7ceB23fD6bC0adD59E62ac25578270cFf1b9f619/0xB77e62709e39aD1cbeEBE77cF493745AeC0F453a',
    buyTokenUrl:
      'https://quickswap.exchange/#/swap?inputCurrency=0x7ceB23fD6bC0adD59E62ac25578270cFf1b9f619&outputCurrency=0xB77e62709e39aD1cbeEBE77cF493745AeC0F453a',
  },
  {
    id: 'quick-cel-eth',
    logo: 'polygon/CEL-ETH.png',
    name: 'CEL-ETH LP',
    token: 'CEL-ETH QLP',
    tokenDescription: 'QuickSwap',
    tokenAddress: '0xEAA5E4620373d9Ded4DCB9267F46fcfc6698c867',
    tokenDecimals: 18,
    tokenDescriptionUrl: '#',
    earnedToken: 'mooQuickCEL-ETH',
    earnedTokenAddress: '0xeF1870FddC25586636bf8a3d7cCf4d298f6E072e',
    earnContractAddress: '0xeF1870FddC25586636bf8a3d7cCf4d298f6E072e',
    pricePerFullShare: 1,
    tvl: 0,
    oracle: 'lps',
    oracleId: 'quick-cel-eth',
    oraclePrice: 0,
    depositsPaused: false,
    status: 'active',
    platform: 'QuickSwap',
    assets: ['CEL', 'ETH'],
    callFee: 0.5,
    addLiquidityUrl:
      'https://quickswap.exchange/#/add/0x7ceB23fD6bC0adD59E62ac25578270cFf1b9f619/0xD85d1e945766Fea5Eda9103F918Bd915FbCa63E6',
    buyTokenUrl:
      'https://quickswap.exchange/#/swap?inputCurrency=0x7ceB23fD6bC0adD59E62ac25578270cFf1b9f619&outputCurrency=0xD85d1e945766Fea5Eda9103F918Bd915FbCa63E6',
  },
  {
    id: 'quick-quick-eth',
    logo: 'polygon/QUICK-ETH.png',
    name: 'QUICK-ETH LP',
    token: 'QUICK-ETH QLP',
    tokenDescription: 'QuickSwap',
    tokenAddress: '0x1Bd06B96dd42AdA85fDd0795f3B4A79DB914ADD5',
    tokenDecimals: 18,
    tokenDescriptionUrl: '#',
    earnedToken: 'mooQuickQUICK-ETH',
    earnedTokenAddress: '0x66df1B2d22759D03A9f37BAaAc826089e56a5936',
    earnContractAddress: '0x66df1B2d22759D03A9f37BAaAc826089e56a5936',
    pricePerFullShare: 1,
    tvl: 0,
    oracle: 'lps',
    oracleId: 'quick-quick-eth',
    oraclePrice: 0,
    depositsPaused: false,
    status: 'active',
    platform: 'QuickSwap',
    assets: ['QUICK', 'ETH'],
    callFee: 0.5,
    addLiquidityUrl:
      'https://quickswap.exchange/#/add/0x7ceB23fD6bC0adD59E62ac25578270cFf1b9f619/0x831753dd7087cac61ab5644b308642cc1c33dc13',
    buyTokenUrl:
      'https://quickswap.exchange/#/swap?inputCurrency=0x7ceB23fD6bC0adD59E62ac25578270cFf1b9f619&outputCurrency=0x831753dd7087cac61ab5644b308642cc1c33dc13',
  },
  {
    id: 'quick-mausdc-usdc',
    logo: 'polygon/maUSDC-USDC.png',
    name: 'maUSDC-USDC LP',
    token: 'maUSDC-USDC QLP',
    tokenDescription: 'QuickSwap',
    tokenAddress: '0x7295304b10740BA8e037826787d3e9386FD99925',
    tokenDecimals: 18,
    tokenDescriptionUrl: '#',
    earnedToken: 'mooQuickmaUSDC-USDC',
    earnedTokenAddress: '0x8c2d54BA94f4638f1bb91f623F378B66d6023324',
    earnContractAddress: '0x8c2d54BA94f4638f1bb91f623F378B66d6023324',
    pricePerFullShare: 1,
    tvl: 0,
    oracle: 'lps',
    oracleId: 'quick-mausdc-usdc',
    oraclePrice: 0,
    depositsPaused: false,
    status: 'active',
    platform: 'QuickSwap',
    assets: ['maUSDC', 'USDC'],
    callFee: 0.5,
    addLiquidityUrl:
      'https://quickswap.exchange/#/add/0x9719d867A500Ef117cC201206B8ab51e794d3F82/0x2791Bca1f2de4661ED88A30C99A7a9449Aa84174',
    buyTokenUrl:
      'https://quickswap.exchange/#/swap?inputCurrency=0x2791bca1f2de4661ed88a30c99a7a9449aa84174&outputCurrency=0x9719d867a500ef117cc201206b8ab51e794d3f82',
  },
  {
    id: 'quick-aave-eth',
    logo: 'polygon/AAVE-ETH.png',
    name: 'AAVE-ETH LP',
    token: 'AAVE-ETH QLP',
    tokenDescription: 'QuickSwap',
    tokenAddress: '0x90bc3E68Ba8393a3Bf2D79309365089975341a43',
    tokenDecimals: 18,
    tokenDescriptionUrl: '#',
    earnedToken: 'mooQuickAAVE-ETH',
    earnedTokenAddress: '0x752948B4493d2Ee09c95F944A76005aEBF410087',
    earnContractAddress: '0x752948B4493d2Ee09c95F944A76005aEBF410087',
    pricePerFullShare: 1,
    tvl: 0,
    oracle: 'lps',
    oracleId: 'quick-aave-eth',
    oraclePrice: 0,
    depositsPaused: false,
    status: 'active',
    platform: 'QuickSwap',
    assets: ['AAVE', 'ETH'],
    callFee: 0.5,
    addLiquidityUrl:
      'https://quickswap.exchange/#/add/0xD6DF932A45C0f255f85145f286eA0b292B21C90B/0x7ceB23fD6bC0adD59E62ac25578270cFf1b9f619',
    buyTokenUrl:
      'https://quickswap.exchange/#/swap?inputCurrency=0xD6DF932A45C0f255f85145f286eA0b292B21C90B&outputCurrency=0x7ceB23fD6bC0adD59E62ac25578270cFf1b9f619',
  },
  {
    id: 'quick-link-eth',
    logo: 'polygon/LINK-ETH.png',
    name: 'LINK-ETH LP',
    token: 'LINK-ETH QLP',
    tokenDescription: 'QuickSwap',
    tokenAddress: '0x5cA6CA6c3709E1E6CFe74a50Cf6B2B6BA2Dadd67',
    tokenDecimals: 18,
    tokenDescriptionUrl: '#',
    earnedToken: 'mooQuickLINK-ETH',
    earnedTokenAddress: '0xaB4105375FbE5F502B0da986F46ADf7a21762e52',
    earnContractAddress: '0xaB4105375FbE5F502B0da986F46ADf7a21762e52',
    pricePerFullShare: 1,
    tvl: 0,
    oracle: 'lps',
    oracleId: 'quick-link-eth',
    oraclePrice: 0,
    depositsPaused: false,
    status: 'active',
    platform: 'QuickSwap',
    assets: ['LINK', 'ETH'],
    callFee: 0.5,
    addLiquidityUrl:
      'https://quickswap.exchange/#/add/0x53e0bca35ec356bd5dddfebbd1fc0fd03fabad39/0x7ceB23fD6bC0adD59E62ac25578270cFf1b9f619',
    buyTokenUrl:
      'https://quickswap.exchange/#/swap?inputCurrency=0x53e0bca35ec356bd5dddfebbd1fc0fd03fabad39&outputCurrency=0x7ceB23fD6bC0adD59E62ac25578270cFf1b9f619',
  },
  {
    id: 'krill-krill-usdc',
    logo: 'polygon/KRILL-USDC.png',
    name: 'KRILL-USDC LP',
    token: 'KRILL-USDC LP',
    tokenDescription: 'Polywhale',
    tokenAddress: '0x6405Ebc22cB0899FC21f414085Ac4044B4721a0d',
    tokenDecimals: 18,
    tokenDescriptionUrl: '#',
    earnedToken: 'mooPolywhaleKRILL-USDC',
    earnedTokenAddress: '0x74907ad4E79b1Ce415caB26FEf526ae017598cEe',
    earnContractAddress: '0x74907ad4E79b1Ce415caB26FEf526ae017598cEe',
    pricePerFullShare: 1,
    tvl: 0,
    oracle: 'lps',
    oracleId: 'krill-krill-usdc',
    oraclePrice: 0,
    depositsPaused: false,
    status: 'active',
    platform: 'Polywhale',
    assets: ['KRILL', 'USDC'],
    callFee: 0.5,
    addLiquidityUrl:
      'https://quickswap.exchange/#/add/0x2791Bca1f2de4661ED88A30C99A7a9449Aa84174/0x05089C9EBFFa4F0AcA269e32056b1b36B37ED71b',
    buyTokenUrl:
      'https://quickswap.exchange/#/swap?inputCurrency=0x05089c9ebffa4f0aca269e32056b1b36b37ed71b&outputCurrency=0x2791bca1f2de4661ed88a30c99a7a9449aa84174',
  },
  {
    id: 'quick-eth-usdt',
    logo: 'polygon/ETH-USDT.png',
    name: 'ETH-USDT LP',
    token: 'ETH-USDT QLP',
    tokenDescription: 'QuickSwap',
    tokenAddress: '0xF6422B997c7F54D1c6a6e103bcb1499EeA0a7046',
    tokenDecimals: 18,
    tokenDescriptionUrl: '#',
    earnedToken: 'mooQuickETH-USDT',
    earnedTokenAddress: '0xC422261EdC5dB679CAd9BC403e886351De540e77',
    earnContractAddress: '0xC422261EdC5dB679CAd9BC403e886351De540e77',
    pricePerFullShare: 1,
    tvl: 0,
    oracle: 'lps',
    oracleId: 'quick-eth-usdt',
    oraclePrice: 0,
    depositsPaused: false,
    status: 'active',
    platform: 'QuickSwap',
    assets: ['ETH', 'USDT'],
    callFee: 0.5,
    addLiquidityUrl:
      'https://quickswap.exchange/#/add/ETH/0xc2132d05d31c914a87c6611c10748aeb04b58e8f',
    buyTokenUrl:
      'https://quickswap.exchange/#/swap?inputCurrency=ETH&outputCurrency=0xc2132d05d31c914a87c6611c10748aeb04b58e8f',
  },
  {
    id: 'quick-eth-matic',
    logo: 'polygon/ETH-MATIC.png',
    name: 'ETH-MATIC LP',
    token: 'ETH-MATIC QLP',
    tokenDescription: 'QuickSwap',
    tokenAddress: '0xadbF1854e5883eB8aa7BAf50705338739e558E5b',
    tokenDecimals: 18,
    tokenDescriptionUrl: '#',
    earnedToken: 'mooQuickETH-MATIC',
    earnedTokenAddress: '0x8b89477dFde285849E1B07947E25012206F4D674',
    earnContractAddress: '0x8b89477dFde285849E1B07947E25012206F4D674',
    pricePerFullShare: 1,
    tvl: 0,
    oracle: 'lps',
    oracleId: 'quick-eth-matic',
    oraclePrice: 0,
    depositsPaused: false,
    status: 'active',
    platform: 'QuickSwap',
    assets: ['ETH', 'MATIC'],
    callFee: 0.5,
    addLiquidityUrl:
      'https://quickswap.exchange/#/add/ETH/0x7ceB23fD6bC0adD59E62ac25578270cFf1b9f619',
    buyTokenUrl:
      'https://quickswap.exchange/#/swap?inputCurrency=0x0d500b1d8e8ef31e21c99d1db9a6444d3adf1270&outputCurrency=ETH',
  },
  {
    id: 'quick-quick-matic',
    logo: 'polygon/QUICK-MATIC.png',
    name: 'QUICK-MATIC LP',
    token: 'QUICK-MATIC QLP',
    tokenDescription: 'QuickSwap',
    tokenAddress: '0x019ba0325f1988213D448b3472fA1cf8D07618d7',
    tokenDecimals: 18,
    tokenDescriptionUrl: '#',
    earnedToken: 'mooQuickQUICK-MATIC',
    earnedTokenAddress: '0xa008B727ddBa283Ddb178b47BB227Cdbea5C1bfD',
    earnContractAddress: '0xa008B727ddBa283Ddb178b47BB227Cdbea5C1bfD',
    pricePerFullShare: 1,
    tvl: 0,
    oracle: 'lps',
    oracleId: 'quick-quick-matic',
    oraclePrice: 0,
    depositsPaused: false,
    status: 'active',
    platform: 'QuickSwap',
    assets: ['QUICK', 'MATIC'],
    callFee: 0.5,
    addLiquidityUrl:
      'https://quickswap.exchange/#/add/0x0d500b1d8e8ef31e21c99d1db9a6444d3adf1270/0x831753dd7087cac61ab5644b308642cc1c33dc13',
    buyTokenUrl:
      'https://quickswap.exchange/#/swap?inputCurrency=0x0d500b1d8e8ef31e21c99d1db9a6444d3adf1270&outputCurrency=0x831753dd7087cac61ab5644b308642cc1c33dc13',
  },
  {
    id: 'cometh-eth-matic',
    logo: 'polygon/ETH-MATIC.png',
    name: 'ETH-MATIC LP',
    token: 'ETH-MATIC LP',
    tokenDescription: 'Cometh',
    tokenAddress: '0x462390EA53F70F7570EEB2002c0150aF519f93A9',
    tokenDecimals: 18,
    tokenDescriptionUrl: '#',
    earnedToken: 'mooComethETH-MATIC',
    earnedTokenAddress: '0xa5aaE3a55cA356C62b5425AA4bFC212542B17777',
    earnContractAddress: '0xa5aaE3a55cA356C62b5425AA4bFC212542B17777',
    pricePerFullShare: 1,
    tvl: 0,
    oracle: 'lps',
    oracleId: 'cometh-eth-matic',
    oraclePrice: 0,
    depositsPaused: false,
    status: 'active',
    platform: 'Cometh',
    assets: ['ETH', 'MATIC'],
    callFee: 0.5,
    addLiquidityUrl:
      'https://swap.cometh.io/#/add/0x0d500b1d8e8ef31e21c99d1db9a6444d3adf1270/0x7ceb23fd6bc0add59e62ac25578270cff1b9f619',
    buyTokenUrl:
      'https://swap.cometh.io/#/swap?inputCurrency=0x0d500b1d8e8ef31e21c99d1db9a6444d3adf1270&outputCurrency=0x7ceb23fd6bc0add59e62ac25578270cff1b9f619',
  },
  {
    id: 'cometh-matic-must',
    logo: 'polygon/MUST-MATIC.png',
    name: 'MUST-MATIC LP',
    token: 'MUST-MATIC LP',
    tokenDescription: 'Cometh',
    tokenAddress: '0x80676b414a905De269D0ac593322Af821b683B92',
    tokenDecimals: 18,
    tokenDescriptionUrl: '#',
    earnedToken: 'mooComethMUST-MATIC',
    earnedTokenAddress: '0x7f6fE34C51d5352A0CF375C0Fbe03bD19eCD8460',
    earnContractAddress: '0x7f6fE34C51d5352A0CF375C0Fbe03bD19eCD8460',
    pricePerFullShare: 1,
    tvl: 0,
    oracle: 'lps',
    oracleId: 'cometh-matic-must',
    oraclePrice: 0,
    depositsPaused: false,
    status: 'active',
    platform: 'Cometh',
    assets: ['MUST', 'MATIC'],
    callFee: 0.5,
    addLiquidityUrl:
      'https://swap.cometh.io/#/add/0x0d500b1d8e8ef31e21c99d1db9a6444d3adf1270/0x9c78ee466d6cb57a4d01fd887d2b5dfb2d46288f',
    buyTokenUrl:
      'https://swap.cometh.io/#/swap?inputCurrency=0x0d500b1d8e8ef31e21c99d1db9a6444d3adf1270&outputCurrency=0x9c78ee466d6cb57a4d01fd887d2b5dfb2d46288f',
  },
  {
    id: 'cometh-usdc-must',
    logo: 'polygon/USDC-MUST.png',
    name: 'USDC-MUST LP',
    token: 'USDC-MUST LP',
    tokenDescription: 'Cometh',
    tokenAddress: '0x12A2aBcFcADc04681929F0c199bDf812967207E4',
    tokenDecimals: 18,
    tokenDescriptionUrl: '#',
    earnedToken: 'mooComethUSDC-MUST',
    earnedTokenAddress: '0x8a198BCbF313A5565c64A7Ed61FaA413eB4E0931',
    earnContractAddress: '0x8a198BCbF313A5565c64A7Ed61FaA413eB4E0931',
    pricePerFullShare: 1,
    tvl: 0,
    oracle: 'lps',
    oracleId: 'cometh-usdc-must',
    oraclePrice: 0,
    depositsPaused: false,
    status: 'active',
    platform: 'Cometh',
    assets: ['USDC', 'MUST'],
    callFee: 0.5,
    addLiquidityUrl:
      'https://swap.cometh.io/#/add/0x2791bca1f2de4661ed88a30c99a7a9449aa84174/0x9c78ee466d6cb57a4d01fd887d2b5dfb2d46288f',
    buyTokenUrl:
      'https://swap.cometh.io/#/swap?inputCurrency=0x2791bca1f2de4661ed88a30c99a7a9449aa84174&outputCurrency=0x9c78ee466d6cb57a4d01fd887d2b5dfb2d46288f',
  },
];
