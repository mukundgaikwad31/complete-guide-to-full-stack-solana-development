const fs = require('fs');
const idl = require('./target/idl/nftmarketplace.json');

fs.writeFileSync('./app/src/idl.json', JSON.stringify(idl));