var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var r=parseFloat(lines.shift());
var pi=3.14159;
var result=pi*Math.pow(r,2);
console.log("A="+result.toFixed(4));