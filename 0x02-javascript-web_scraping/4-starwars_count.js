#!/usr/bin/node
const url = process.argv[2];
let count = 0;
const request = require('request');
request(url, function (err, response, body) {
  if (err) {
    console.log(err);
  } else if (response && response.statusCode === 200) {
    const films = JSON.parse(body).results;
    for (let i = 0; i < films.length; i++) {
      for (let j = 0; j < films[i].characters.length; j++) {
        if (films[i].characters[j].includes('18')) {
          count++;
        }
      }
    }
    console.log(count);
  }
});
