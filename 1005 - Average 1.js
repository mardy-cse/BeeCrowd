var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var a=parseFloat(lines.shift());
var b=parseFloat(lines.shift());
var w=(a*3.5)+(b*7.5);
var MEDIA=w/11;
console.log("MEDIA = "+MEDIA.toFixed(5));