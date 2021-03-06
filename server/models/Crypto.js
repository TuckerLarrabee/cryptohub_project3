const { Schema, model } = require('mongoose');
// const dateFormat = require('../utils/dateFormat');

const cryptoSchema = new Schema(
  {
    cryptocurrency: {
      type: String,
      required: true,
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

module.exports = {Crypto, cryptoSchema};
