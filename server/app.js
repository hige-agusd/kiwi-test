var express = require('express');
var app = express();
const digitToChar = [
  [' '],
  [',','.','!','?'],
  ['a','b','c'],
  ['d','e','f'],
  ['g','h','i'],
  ['j','k','l'],
  ['m','n','o'],
  ['p','q','r','s'],
  ['t','u','v'],
  ['w','x','y','z']
];
const t9Translator = (digits) => {
  if (!digits || !digits.length ) return [];
  const letterMatrix = digits.split('').map(digit => digitToChar[Number(digit)] || ['']);
  return letterMatrix.reduce((strings, currentEntry) => {
    const combinations = [];
    strings.reduce((_, current) => {
      [...currentEntry].map(digit => combinations.push(`${current}${digit}`));
    }, '');
    return combinations;
  });
};
app.get('/', function (req, res) {
  res.send('Hello World!');
});

app.get('/t9/:param', function (req, res) {
  res.send(t9Translator(req.params.param));
});

app.listen(3003, function () {
  console.log('T9 server listening on port 3003!');
});