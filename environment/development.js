const path = require("path");

module.exports = {
  dbUrl: "mongodb://127.0.0.1/twitter",
  cert: path.join(__dirname, "../ssl/local.crt"),
  key: path.join(__dirname, "../ssl/local.key"),
};
