const findAllKeys = require('./utils/find-keys');
const genExcel = require('./utils/gen-excel');

const allKeys = findAllKeys();
console.log('allKeys', allKeys)
genExcel(allKeys);