let zt = require('../../src/zhe-tool.js');
let mockData = require('./mock.js');
console.log(mockData);
console.log(JSON.stringify(zt.convertToTreeData(mockData,null)));