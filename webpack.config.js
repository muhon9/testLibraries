const path = require("path");

module.exports = {
  entry: "./jss/app.js",
  output: {
    path: path.resolve(__dirname),
    filename: "__bundle.js",
  },
};
