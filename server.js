const express = require('express');
// const hbs = require('hbs');
const pug = require('pug');
const fs = require('fs');

var app = express();

// hbs.registerPartials(__dirname + '/views/partials');
app.set('view engine','pug');
app.use(express.static(__dirname+'/public'));
app.use(express.static(__dirname+'/src'));

// hbs.registerHelper('getCurrentYear', () => {
//   return new Date().getFullYear()
// });
//
// hbs.registerHelper('screamIt', (text) => {
//   return new text.toUpperCase();
// });

var currentYear = new Date().getFullYear();

app.get('/', (req, res) => {
  res.render('index.pug', {
    pageTitle: 'Index Page',
    currentYear: currentYear
  });
});

app.get('/about', (req, res) => {
  res.render('about.pug', {
    pageTitle: 'About Page',
    currentYear: currentYear
  });
});

app.get('/bad', (req,res) => {
  res.send({
    errorMessage: 'Unable to handle request'
  });
});

app.listen(3000, () => {
  console.log('Server is up on port 3000')
});
