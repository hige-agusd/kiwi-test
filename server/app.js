var express = require('express');
var app = express();
const dict = require('./dict.js');

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

const t9dictTranslator = digits => {
  if (!digits || !digits.length ) return [];
  if (digits === '1') return digitToChar[digits];
  const retVal = [];
  const combinations = t9Translator(digits);
  for(let i = 0; i<combinations.length; i++) {
    let slice = {...dict.dict};
    for(let j = 0; j<combinations[i].length; j++) {
      if(slice.hasOwnProperty(combinations[i][j])) {
        slice = slice[combinations[i][j]];
      } else {
        slice = {};
        break;
      }
    }
    if(slice.hasOwnProperty('$') || slice === 0) {
      retVal.push(combinations[i]);
    }
  }
  return retVal;
}

app.get('/', function (req, res) {
  res.send('Hello World!');
});

app.get('/t9/:digits', function (req, res) {
  res.send(t9Translator(req.params.digits));
});

app.get('/t9dict/:digits', (req, res) => {
  res.send(t9dictTranslator(req.params.digits));
});

app.listen(3003, function () {
  console.log('T9 server listening on port 3003!');
});