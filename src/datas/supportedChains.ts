import { SupportedChain } from "@/helpers/interfaces/api";

export const supportedChains: Array<SupportedChain> = [
  {
    id: "fantom",
    symbol: "ftm",
    name: "Fantom",
    web_slug: "fantom",
    categories: [
      "Layer 1 (L1)",
      "Harmony Ecosystem",
      "Ethereum Ecosystem",
      "Moonriver Ecosystem",
      "BNB Chain Ecosystem",
      "Fantom Ecosystem",
      "Infrastructure",
      "Smart Contract Platform",
    ],
    description: {
      en: "FANTOM is a new DAG based Smart Contract platform that intends to solve the scalability issues of existing public distributed ledger technologies. \r\n\r\nThe platform intends to distinguish itself from the traditional block ledger-based storage infrastructure by attempting to employ an improved version of existing DAG-based pro-tocols. The FANTOM platform adopts a new protocol known as the “Lachesis Protocol” to maintain consensus. This protocol is intended to be integrated into the Fantom OPERA Chain. The aim is to allow applications built on top of the FANTOM OPERA Chain to enjoy instant transactions and near zero transaction costs for all users. \r\n\r\nThe mission of FANTOM is to provide compatibility between all transaction bodies around the world, and create an ecosystem which allows real-time transactions and data sharing with low cost.",
    },
    image: {
      thumb: "https://assets.coingecko.com/coins/images/4001/thumb/Fantom_round.png?1696504642",
      small: "https://assets.coingecko.com/coins/images/4001/small/Fantom_round.png?1696504642",
      large: "https://assets.coingecko.com/coins/images/4001/large/Fantom_round.png?1696504642",
    },
  },
  {
    id: "velas",
    symbol: "vlx",
    web_slug: "velas",
    name: "Velas",
    categories: [
      "Velas Ecosystem",
      "BNB Chain Ecosystem",
      "Ethereum Ecosystem",
      "Solana Ecosystem",
      "Smart Contract Platform",
    ],
    description: {
      en: '"Velas AG, headquartered in Switzerland, is a new AI-operated dPoS (delegated proof of stake) blockchain project and an ecosystem on which one can build AI projects, dApps, smart contracts, etc. It is founded by the CEO of the world’s first and biggest altcoin payment processor platform from 2013 – Coinpayments.net – Alex Alexandrov. Coinpayments created a CPS coin to provide its active merchants and users of 3\'000 000 000 a discount token for transactions and fees, and earn staking rewards vaulting their CPS coin. The development of Velas rooted from CPS, as the founders saw an opportunity to create an own proprietary AI enhanced Blockhain and consensus protocol, rather than using a third party solution which still has flaws. Development of Velas started 2 years ago. \r\n\r\nCoinpayments Coin to Velas coin (VLX) was done via Coinpayments platform on the 4th of July 2019 and will mark the day of Velas independence from original token. This will also launch first Stage described in Technical Paper.\r\n\r\nThe purpose of Velas is to address and fix existing issues and challenges faced by most existing Blockchains, like centralization, 51% attack, nothing at stake problem, scalability, security, high upfront expenses, etc. It does so by using neural networks optimized by artificial intuition to enhance its consensus algorithm."',
    },
    image: {
      thumb: "https://assets.coingecko.com/coins/images/9651/thumb/logo_blue.png?1696509720",
      small: "https://assets.coingecko.com/coins/images/9651/small/logo_blue.png?1696509720",
      large: "https://assets.coingecko.com/coins/images/9651/large/logo_blue.png?1696509720",
    },
  },
  {
    id: "ethereum",
    symbol: "eth",
    web_slug: "ethereum",
    name: "Ethereum",
    categories: [
      "FTX Holdings",
      "Multicoin Capital Portfolio",
      "Proof of Stake (PoS)",
      "Smart Contract Platform",
      "Layer 1 (L1)",
      "Ethereum Ecosystem",
    ],
    description: {
      en: "Ethereum is a global, open-source platform for decentralized applications. In other words, the vision is to create a world computer that anyone can build applications in a decentralized manner; while all states and data are distributed and publicly accessible. Ethereum supports smart contracts in which developers can write code in order to program digital value. Examples of decentralized apps (dapps) that are built on Ethereum includes tokens, non-fungible tokens, decentralized finance apps, lending protocol, decentralized exchanges, and much more.\r\n\r\nOn Ethereum, all transactions and smart contract executions require a small fee to be paid. This fee is called Gas. In technical terms, Gas refers to the unit of measure on the amount of computational effort required to execute an operation or a smart contract. The more complex the execution operation is, the more gas is required to fulfill that operation. Gas fees are paid entirely in Ether (ETH), which is the native coin of the blockchain. The price of gas can fluctuate from time to time depending on the network demand.",
    },
    image: {
      thumb: "https://assets.coingecko.com/coins/images/279/thumb/ethereum.png?1696501628",
      small: "https://assets.coingecko.com/coins/images/279/small/ethereum.png?1696501628",
      large: "https://assets.coingecko.com/coins/images/279/large/ethereum.png?1696501628",
    },
  },
  {
    id: "celo_mainnet",
    symbol: "celo",
    name: "Celo",
    web_slug: "celo",
    categories: ["Proof of Stake (PoS)", "Coinbase Ventures Portfolio", "DWF Labs Portfolio", "Celo Ecosystem"],
    description: {
      en: "Celo enables participation on the Platform, with the opportunity to earn rewards through network participation. Celo’s stability mechanism and token economics are designed in such a way that demand for cGLD directly increases as demand for Celo Dollars (cUSD) and other stable value assets increases.\r\n\r\ncGLD is a native cryptographic digital asset created at the mainnet release of the Celo Platform. cGLD has no relationship to physical gold.\r\n\r\ncGLD is a utility and governance asset required to participate on the Celo Platform. Some uses include:\r\n\r\nRunning a validator to secure and operate aspects of the Celo Platform\r\nVoting for validators working to secure and operate the Celo Platform\r\nParticipating in governance decisions to influence the future of the Celo Platform\r\nSupporting applications on the platform\r\ncGLD forms part of the overcollateralized reserve that supports the Celo stable value assets (initially Celo Dollar or cUSD).\r\n\r\nThe Celo Protocol automatically adds cGLD to the reserve whenever the Celo stable value asset supply increases.",
    },
    image: {
      thumb: "https://assets.coingecko.com/coins/images/11090/thumb/InjXBNx9_400x400.jpg?1696511031",
      small: "https://assets.coingecko.com/coins/images/11090/small/InjXBNx9_400x400.jpg?1696511031",
      large: "https://assets.coingecko.com/coins/images/11090/large/InjXBNx9_400x400.jpg?1696511031",
    },
  },
  {
    id: "moonbeam",
    web_slug: "moonbeam",
    symbol: "glmr",
    name: "Moonbeam",
    categories: ["Coinbase Ventures Portfolio", "Smart Contract Platform", "Layer 1 (L1)", "Polkadot Ecosystem"],
    description: {
      en: "Moonbeam is much more than just an EVM implementation: it’s a highly specialized Layer 1 chain that mirrors Ethereum’s Web3 RPC, accounts, keys, subscriptions, logs, and more. The Moonbeam platform extends the base Ethereum feature set with additional features such as on-chain governance, staking, and cross-chain integrations.\r\n\r\nMoonbeam combines the best of both worlds: the familiar and easy-to-use tooling of Ethereum and the scalable, interoperable architecture of Polkadot.\r\n\r\nDive into the tools, integrations, and comprehensive tutorials to start using and building on Moonbeam.",
    },
    image: {
      thumb: "https://assets.coingecko.com/coins/images/22459/thumb/glmr.png?1696521782",
      small: "https://assets.coingecko.com/coins/images/22459/small/glmr.png?1696521782",
      large: "https://assets.coingecko.com/coins/images/22459/large/glmr.png?1696521782",
    },
  },
  {
    id: "bsc",
    symbol: "bnb",
    web_slug: "bnb",
    name: "BNB",
    categories: [
      "Proof of Stake (PoS)",
      "FTX Holdings",
      "Alleged SEC Securities",
      "Layer 1 (L1)",
      "Ethereum Ecosystem",
      "Moonriver Ecosystem",
      "Smart Contract Platform",
      "Polygon Ecosystem",
      "Avalanche Ecosystem",
      "BNB Chain Ecosystem",
      "Centralized Exchange (CEX)",
      "Exchange-based Tokens",
    ],
    description: {
      en: 'Binance Coin is the cryptocurrency of the <a href="https://www.coingecko.com/en/exchanges/binance">Binance</a> platform. It is a trading platform exclusively for cryptocurrencies. The name "Binance" is a combination of binary and finance.\r\n\r\nThus, the startup name shows that only cryptocurrencies can be traded against each other. It is not possible to trade crypto currencies against Fiat. The platform achieved an enormous success within a very short time and is focused on worldwide market with Malta headquarters. The cryptocurrency currently has a daily trading volume of 1.5 billion - 2 billion US dollars and is still increasing.\r\n\r\nIn total, there will only be 200 million BNBs. Binance uses the <a href="https://www.coingecko.com/en/coins/all?asset_platform_id=279">ERC20 token standard</a> from <a href="https://www.coingecko.com/en/coins/ethereum">Ethereum</a> and has distributed it as follow: 50% sold on ICO, 40% to the team and 10% to Angel investors. The coin can be used to pay fees on Binance. These include trading fees, transaction fees, listing fees and others. Binance gives you a huge discount when fees are paid in BNB. \r\n\r\nThe schedule of BNB fees discount is as follow: In the first year, 50% discount on all fees, second year 25% discount, third year 12.5% discount, fourth year 6.75 % discount, and from the fifth year onwards there is no discount. This structure is used to incentivize users to buy BNB and do trades within Binance.\r\n\r\nBinance announced in a buyback plan that it would buy back up to 100 million BNB in Q1 2018. The coins are then burned. This means that they are devaluated to increase the value of the remaining coins. This benefits investors. In the future, the cryptocurrency will remain an asset on the trading platform and will be used as gas.\r\n\r\nOther tokens that are issued by exchanges include <a href="https://www.coingecko.com/en/coins/bibox-token">Bibox Token</a>, <a href="https://www.coingecko.com/en/coins/okb">OKB</a>, <a href="https://www.coingecko.com/en/coins/huobi-token">Huobi Token</a>, and more.',
    },
    image: {
      thumb: "https://assets.coingecko.com/coins/images/825/thumb/bnb-icon2_2x.png?1696501970",
      small: "https://assets.coingecko.com/coins/images/825/small/bnb-icon2_2x.png?1696501970",
      large: "https://assets.coingecko.com/coins/images/825/large/bnb-icon2_2x.png?1696501970",
    },
  },
  {
    id: "avalanche",
    symbol: "avax",
    name: "Avalanche",
    web_slug: "avalanche",
    categories: ["Proof of Stake (PoS)", "Smart Contract Platform", "Layer 1 (L1)", "Avalanche Ecosystem"],

    description: {
      en: "Avalanche is a high throughput smart contract blockchain platform. Validators secure the network through a proof-of-stake consensus protocol. It is said to be fast, low cost, and environmental friendly.",
    },

    image: {
      thumb: "https://assets.coingecko.com/coins/images/12559/thumb/Avalanche_Circle_RedWhite_Trans.png?1696512369",
      small: "https://assets.coingecko.com/coins/images/12559/small/Avalanche_Circle_RedWhite_Trans.png?1696512369",
      large: "https://assets.coingecko.com/coins/images/12559/large/Avalanche_Circle_RedWhite_Trans.png?1696512369",
    },
  },
  {
    id: "matic",
    symbol: "matic",
    web_slug: "polygon",
    name: "Polygon",
    categories: [
      "Proof of Stake (PoS)",
      "Rollup",
      "Coinbase Ventures Portfolio",
      "FTX Holdings",
      "Binance Launchpad",
      "Alleged SEC Securities",
      "Zero Knowledge (ZK)",
      "Layer 2 (L2)",
      "Harmony Ecosystem",
      "Ethereum Ecosystem",
      "Moonbeam Ecosystem",
      "Moonriver Ecosystem",
      "BNB Chain Ecosystem",
      "Smart Contract Platform",
      "Polygon Ecosystem",
    ],
    description: {
      en: "Polygon (Previously Matic Network) is the first well-structured, easy-to-use platform for Ethereum scaling and infrastructure development. Its core component is Polygon SDK, a modular, flexible framework that supports building multiple types of applications.\r\n\r\nUsing Polygon, one can create Optimistic Rollup chains, ZK Rollup chains, stand alone chains or any other kind of infra required by the developer. \r\n\r\nPolygon effectively transforms Ethereum into a full-fledged multi-chain system (aka Internet of Blockchains). This multi-chain system is akin to other ones such as Polkadot, Cosmos, Avalanche etc with the advantages of Ethereum’s security, vibrant ecosystem and openness.\r\n\r\nNothing will change for the existing ecosystem built on the Plasma-POS chain. With Polygon, new features are being built around the existing proven technology to expand the ability to cater to diverse needs from the developer ecosystem. Polygon will continue to develop the core technology so that it can scale to a larger ecosystem. \r\n\r\nThe $MATIC token will continue to exist and will play an increasingly important role, securing the system and enabling governance.",
    },
    image: {
      thumb: "https://assets.coingecko.com/coins/images/4713/thumb/polygon.png?1698233745",
      small: "https://assets.coingecko.com/coins/images/4713/small/polygon.png?1698233745",
      large: "https://assets.coingecko.com/coins/images/4713/large/polygon.png?1698233745",
    },
  },
  {
    id: "klaytn",
    symbol: "klay",
    name: "Klaytn",
    web_slug: "klaytn",
    categories: ["Klaytn Ecosystem", "Layer 1 (L1)"],
    description: {
      en: 'Klaytn is a public blockchain focused on the metaverse, gamefi, and the creator economy. Officially launched in June 2019, it is the dominant blockchain platform in South Korea and is now undergoing global business expansion from its international base in Singapore.\r\n\r\nThese business expansion activities are supported by the US$500m Klaytn Growth Fund, which aims to grow the ecosystem of companies built on Klaytn. The fund is managed and disbursed by Klaytn Foundation, a Singapore-based non-profit organization established in August 2021.\r\n\r\nTo learn more, please visit <a href="https://klaytn.foundation/">https://klaytn.foundation</a>',
    },
    image: {
      thumb: "https://assets.coingecko.com/coins/images/9672/thumb/klaytn.png?1696509742",
      small: "https://assets.coingecko.com/coins/images/9672/small/klaytn.png?1696509742",
      large: "https://assets.coingecko.com/coins/images/9672/large/klaytn.png?1696509742",
    },
  },
  {
    id: "cronos",
    symbol: "cro",
    name: "Cronos",
    web_slug: "cronos",
    categories: [
      "Ethereum Ecosystem",
      "Layer 1 (L1)",
      "Cronos Ecosystem",
      "Exchange-based Tokens",
      "Centralized Exchange (CEX)",
      "Cosmos Ecosystem",
    ],
    description: {
      en: "We propose Crypto.com Chain, the next generation decentralized mobile payment protocol, the most efficient and secure way to pay and be paid in crypto, anywhere, any crypto\r\nwithout fees. Crypto.com Chain will deliver on its vision by developing innovative technology components and processes (inc. scalable encryption algorithm to protect users’ privacy, utilizing trusted execution environments, sustainable price stability mechanisms, user protection via PoGSD) catered specifically to cryptocurrency payment, while leveraging proven blockchain technology structural design elements. ",
    },
    image: {
      thumb: "https://assets.coingecko.com/coins/images/7310/thumb/cro_token_logo.png?1696507599",
      small: "https://assets.coingecko.com/coins/images/7310/small/cro_token_logo.png?1696507599",
      large: "https://assets.coingecko.com/coins/images/7310/large/cro_token_logo.png?1696507599",
    },
  },
];
