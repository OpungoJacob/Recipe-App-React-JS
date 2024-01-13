// /* const path = require('path');

// module.exports = {
//   // ... other webpack configuration options
//   resolve: {
//     fallback: {
//       path: require.resolve('path-browserify'),
//       os: require.resolve('os-browserify/browser'),
//     },
//   },
// }; */

// const Dotenv = require('dotenv-webpack');

// module.exports = {
//   // ... other webpack configuration options
//   plugins: [
//     new Dotenv(),
//   ],
// };

const path = require('path');
const Dotenv = require('dotenv-webpack');

module.exports = {
  // ... other webpack configuration options

  resolve: {
    fallback: {
      path: require.resolve('path-browserify'),
      os: require.resolve('os-browserify/browser'),
    },
  },

  plugins: [
    new Dotenv(),
  ],
};