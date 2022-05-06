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

  const cryptoData = [];

  for (let i = 0; i < 25; i += 1) {
    const cryptocurrencyName = faker.internet.domainWord();

    cryptoData.push({cryptocurrencyName});
  }
  
  const createdCryptos = await Crypto.collection.insertMany(cryptoData);

  console.log('all done!');
  process.exit(0);
});
