const Read = require("./read");
const Deserialize = require("./deserialize");
const Check = require("./check");
const Validate = require("./validate");
const Write = require("./write");
const Serialize = require("./serialize");
const Respond = require("./respond");

module.exports = [
  Read,
  Deserialize,
  Check,
  Validate,
  Write,
  Serialize,
  Respond
];
