const { Schema, model } = require('mongoose');
// const dateFormat = require('../utils/dateFormat');

const cryptoSchema = new Schema(
  {
    cryptocurrencyName: {
      type: String,
      required: true,
      maxlength: 280
    },
    username: {
      type: String,
      required: false
    },
    // createdAt: {
    //   type: Date,
    //   default: Date.now,
    //   get: timestamp => dateFormat(timestamp)
    // }
  },
  {
    toJSON: {
      getters: true
    }
  }
);

const Crypto = model('Crypto', cryptoSchema);

module.exports = Crypto;
