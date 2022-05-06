const faker = require('faker');

const db = require('../config/connection');
const { Crypto, User } = require('../models');

db.once('open', async () => {
  await Crypto.deleteMany({});
  await User.deleteMany({});

  // create user data
  const userData = [];

  for (let i = 0; i < 50; i += 1) {
    const username = faker.internet.userName();
    const email = faker.internet.email(username);
    const password = faker.internet.password();

    userData.push({ username, email, password });
  }

  const createdUsers = await User.collection.insertMany(userData);

  const cryptoData = [
    {cryptocurrency: "Bitcoin"},
    {cryptocurrency: "Ethereum"},
    {cryptocurrency: "Tether"},
    {cryptocurrency: "BNB"},
    {cryptocurrency: "USD Coin"},
    {cryptocurrency: "XRP"},
    {cryptocurrency: "Solana"},
    {cryptocurrency: "Terra"},
    {cryptocurrency: "Cardana"},
    {cryptocurrency: "Terra USD"},
    {cryptocurrency: "Binance USD"},
    {cryptocurrency: "DogeCoin"},
    {cryptocurrency: "Polkadot"},
    {cryptocurrency: "Avalanche"},
    {cryptocurrency: "Shiba Inu"},
    {cryptocurrency: "Tron"},
    {cryptocurrency: "Dai"},
    {cryptocurrency: "Near Protocol"},
    {cryptocurrency: "Polygon"},
    {cryptocurrency: "Cronos"},
    {cryptocurrency: "Litecoin"},
    {cryptocurrency: "Chainlink"},
    {cryptocurrency: "Algorand"},
    {cryptocurrency: "OKB"},
    {cryptocurrency: "Stellar"},
    {cryptocurrency: "Monero"},
    {cryptocurrency: "Apecoin"},
    {cryptocurrency: "Ethereum Classic"},
    {cryptocurrency: "Uniswap"},
    {cryptocurrency: "VeChain"},
    {cryptocurrency: "Internet Computer"},
    {cryptocurrency: "Magic Internet Money"},
    {cryptocurrency: "Hedera"},
    {cryptocurrency: "Filecoin"},
    {cryptocurrency: "Elrond"},
    {cryptocurrency: "Frax"},
    {cryptocurrency: "The Sandbox"},
    {cryptocurrency: "Theta Network"},
    {cryptocurrency: "PancakeSwap"},
    {cryptocurrency: "Tezos"},
    {cryptocurrency: "DefiChain"},
    {cryptocurrency: "Ceth"},
    {cryptocurrency: "Axie Infinity"},
    {cryptocurrency: "Decentraland"},
    {cryptocurrency: "The Graph"},
    {cryptocurrency: "EOS"},
    {cryptocurrency: "ThorChain"},
    {cryptocurrency: "AAVE"},
    {cryptocurrency: "Theta Fuel"},
    {cryptocurrency: "Klaytn"},
    {cryptocurrency: "Fantom"},
    {cryptocurrency: "KuCoin Token"},
    {cryptocurrency: "Flow"},
    {cryptocurrency: "BitTorrent"},
    {cryptocurrency: "Zcash"},
    {cryptocurrency: "Stepn"},
    {cryptocurrency: "Helium"},
    {cryptocurrency: "Waves"},
    {cryptocurrency: "Huobi Token"},
    {cryptocurrency: "Osmosis"},
    {cryptocurrency: "eCash"},
    {cryptocurrency: "Iota"},
    {cryptocurrency: "Chain"},
    {cryptocurrency: "TrueUSD"},
    {cryptocurrency: "Maker"},
    {cryptocurrency: "Neo"},
    {cryptocurrency: "Quaint"},
    {cryptocurrency: "Radix"},
    {cryptocurrency: "Zilliqa"},
    {cryptocurrency: "Kusama"},
    {cryptocurrency: "arweave"},
    {cryptocurrency: "Gala"},
    {cryptocurrency: "Nexo"},
    {cryptocurrency: "Celo"},
    {cryptocurrency: "BitDAO"},
    {cryptocurrency: "cDAI"},
    {cryptocurrency: "Synthetic Network Token"},
    {cryptocurrency: "Pax Dollar"},
    {cryptocurrency: "Enjin Coin"},
    {cryptocurrency: "GateToken"},
    {cryptocurrency: "Dash"},
    {cryptocurrency: "Neutrino USD"},
    {cryptocurrency: "Harmony"},
    {cryptocurrency: "Chiliz"},
    {cryptocurrency: "Stacks"},
    {cryptocurrency: "Loopring"}
  ];

 
  // for (let i = 0; i < 25; i += 1) {
  //   const cryptocurrencyName = faker.internet.domainWord();

  //   cryptoData.push({cryptocurrencyName});
  // }
  
  console.log(cryptoData)
  const createdCryptos = await Crypto.insertMany(cryptoData);

  console.log('all done!');
  process.exit(0);
});
