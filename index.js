const express = require('express');
const app = express();
const port = 3000;
let bottle = 99;


app.get('/', (req, res) => {
  res.send(`99 Bottles of beer on the wall </br> <a href="/:${bottle > 0 ? bottle : bottle = 99}">take one down, pass it around</a>`);
})


app.get(`/:${bottle}`, (req, res) => {
 res.send(`${bottle} Bottles of beer on the wall.</br> <a href=${bottle === 0 ? "/" : bottle--}>${bottle === 0 ? "start over" : "take one down, pass it around"}</a>`);
})

app.listen(port, function () {
  console.log('Listening on port', port);
})