let zt = require('../../src/zhe-tool.js');
let mockData = require('./mock.js');
console.log(JSON.stringify(zt.convertTreeToFlatData(mockData,[])));