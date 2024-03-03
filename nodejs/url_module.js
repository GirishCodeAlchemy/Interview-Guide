const url = require("url")

let address = "http://localhost.com/test?year=2020&month=march"

let api = url.parse(address, true);
console.log(api.host);
console.log(api.pathname);
console.log(api.search);
console.log(api.query);