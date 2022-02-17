const path = require('path');
const fs = require('fs');
const solc = require('solc');

const ContractPath = path.resolve(__dirname, 'contracts', 'Lottery.sol');
const source = fs.readFileSync(ContractPath, 'utf8');

module.exports = solc.compile(source, 1).contracts[':Lottery'];
