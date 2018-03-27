fs = require('fs');

var a = fs.readFileSync('phones-data.json');
console.log(JSON.parse(a));