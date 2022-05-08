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
    {cryptocurrency: "bitcoin"},
    {cryptocurrency: "ethereum"},
    {cryptocurrency: "tether"},
    {cryptocurrency: "binance-coin"},
    {cryptocurrency: "usd-coin"},
    {cryptocurrency: "ripple"},
    {cryptocurrency: "solana"},
    {cryptocurrency: "terra-luna"},
    {cryptocurrency: "cardano"},
    {cryptocurrency: "terrausd"},
    {cryptocurrency: "binance-usd"},
    {cryptocurrency: "dogecoin"},
    {cryptocurrency: "polkadot"},
    {cryptocurrency: "avalanche-2"},
    {cryptocurrency: "staked-ether"},
    {cryptocurrency: "wrapped-bitcoin"},
    {cryptocurrency: "shiba-inu"},
    {cryptocurrency: "tron"},
    {cryptocurrency: "dai"},
    {cryptocurrency: "near"},
    {cryptocurrency: "matic-network"},
    {cryptocurrency: "crypto-com-chain"},
    {cryptocurrency: "litecoin"},
    {cryptocurrency: "bonded-luna"},
    {cryptocurrency: "bitcoin-cash"},
    {cryptocurrency: "algorand"},
    {cryptocurrency: "chainlink"},
    {cryptocurrency: "ftx-token"},
    {cryptocurrency: "cosmos"},
    {cryptocurrency: "stellar"},
    {cryptocurrency: "monero"},
    {cryptocurrency: "ethereum-classic"},
    {cryptocurrency: "uniswap"},
    {cryptocurrency: "apecoin"},
    {cryptocurrency: "vechain"},
    {cryptocurrency: "eth_frax3crv-f_0xd632f22692fac7611d2aa1c0d552930d43caed3b"},
    {cryptocurrency: "magic-internet-money"},
    {cryptocurrency: "hedera-hashgraph"},
    {cryptocurrency: "filecoin"},
    {cryptocurrency: "frax"},
    {cryptocurrency: "elrond-erd-2"},
    {cryptocurrency: "the-sandbox"},
    {cryptocurrency: "axie-infinity"},
    {cryptocurrency: "tezos"},
    {cryptocurrency: "compound-ether"},
    {cryptocurrency: "defichain"},
    {cryptocurrency: "bitcoin-cash-abc-2"},
    {cryptocurrency: "theta-token"},
    {cryptocurrency: "the-graph"},
    {cryptocurrency: "pancakeswap-token"},
    {cryptocurrency: "decentraland"},
    {cryptocurrency: "eos"},
    {cryptocurrency: "theta-fuel"},
    {cryptocurrency: "aave"},
    {cryptocurrency: "thorchain"},
    {cryptocurrency: "fantom"},
    {cryptocurrency: "klay-token"},
    {cryptocurrency: "stepn"},
    {cryptocurrency: "kucoin-shares"},
    {cryptocurrency: "flow"},
    {cryptocurrency: "bittorrent-2"},
    {cryptocurrency: "internet-computer"},
    {cryptocurrency: "ethos"},
    {cryptocurrency: "compound-usd-coin"},
    {cryptocurrency: "compound-wrapped-btc"},
    {cryptocurrency: "zcash"},
    {cryptocurrency: "helium_hnt"},
    {cryptocurrency: "chain-2"},
    {cryptocurrency: "frax-share"},
    {cryptocurrency: "huobi-token"},
    {cryptocurrency: "bitcoin-sv"},
    {cryptocurrency: "huobi-btc"},
    {cryptocurrency: "ecash"},
    {cryptocurrency: "convex-finance"},
    {cryptocurrency: "iota"},
    {cryptocurrency: "humans-ai"},
    {cryptocurrency: "waves"},
    {cryptocurrency: "trueusd"},
    {cryptocurrency: "osmosis"},
    {cryptocurrency: "neo"},
    {cryptocurrency: "quant"},
    {cryptocurrency: "zilliqa"},
    {cryptocurrency: "radix"},
    {cryptocurrency: "maker"},
    {cryptocurrency: "nexo"},
    {cryptocurrency: "celo"},
    {cryptocurrency: "kusama"},
    {cryptocurrency: "arweave"},
    {cryptocurrency: "gala"},
    {cryptocurrency: "paxos-standard-token"},
    {cryptocurrency: "lido-dao"},
    {cryptocurrency: "cdai"},
    {cryptocurrency: "havven"},
    {cryptocurrency: "bitdao"},
    {cryptocurrency: "curve-dao-token"},
    {cryptocurrency: "gatechain-token"},
    {cryptocurrency: "neutrino"},
    {cryptocurrency: "enjin-coin"},
    {cryptocurrency: "dash"},
    {cryptocurrency: "chiliz"},
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
