'use strict';

const fs = require('fs');
const bitmap = fs.readFileSync('../asset/bitmap.bmp');
const colorShift = require('./lib/color-shift.js');

console.log('Bitmap Type: ' + bitmap.toString('ascii', 0, 2));
console.log('File Size: ' + bitmap.readUInt32LE(2));
console.log('Offset Start: ' + bitmap.readUInt32LE(10));
console.log('Bits Per Pxl: ' + bitmap.readUInt32LE(28));
console.log('Number of colors: ' + bitmap.readUInt32LE(46));

const newBitmap = function (){
  fs.writeFileSync('../asset/newBitmap.bmp', colorShift.shift1(bitmap, 54, 1077, 54));
};

newBitmap();
