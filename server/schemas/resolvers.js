const { User, Crypto } = require('../models');
const { AuthenticationError } = require('apollo-server-express');
const { signToken } = require('../utils/auth');

const resolvers = {
  Query: {
    // Use this query for Profile link
    me: async (parent, args, context) => {
      if (context.user) {
        console.log(context.user)
        const userData = await User.findOne({ _id: context.user._id })
          .select('-__v -password')
       return userData;
      }
    
      throw new AuthenticationError('Not logged in');
    },
    users: async () => {
      return User.find()
        .select('-__v -password')
    },
    user: async (parent, { username }) => {
      return User.findOne({ username })
        .select('-__v -password')
    },
    crypto: async () => {
      return Crypto.find();
    },
  },
  Mutation: {
    addUser: async (parent, args) => {
      const user = await User.create(args);
      const token = signToken(user);
    
      return { token, user };
    },
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });
    
      if (!user) {
        throw new AuthenticationError('Incorrect credentials');
      }
    
      const correctPw = await user.isCorrectPassword(password);
    
      if (!correctPw) {
        throw new AuthenticationError('Incorrect credentials');
      }
    
      const token = signToken(user);
      return { token, user };
    },
  
    favorite: async (parent, { cryptocurrency}, context) => {     
      console.log("CONTEXT", context.user)
      // console.log("CRYPTO", cryptocurrency.toLowerCase())
      const favoritedCoin = await User.findOneAndUpdate(
          { username: context.user.username },
          { $push: { coins: { cryptocurrency } } },
          { new: true, runValidators: true }
        );

        return favoritedCoin;
      }
    }
  };

module.exports = resolvers;
