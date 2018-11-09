const express = require('express');
// const hbs = require('hbs');
const pug = require('pug');
const fs = require('fs');

var app = express();

// sass
var sass = require('node-sass');
sass.render({
  file: 'index.sass'
}, function(err, result){});


// hbs.registerPartials(__dirname + '/views/partials');
app.set('view engine','pug');
app.use(express.static(__dirname+'/public'));
app.use(express.static(__dirname+'/src/img'));

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
    pageTitle:'index'
  });
});

app.get('/education', (req, res) => {
  res.render('education.pug', {
    pageTitle: '教育经验'
  });
});

app.get('/work', (req, res) => {
  res.render('work.pug', {
    pageTitle: '工作经验'
  });
});

app.get('/project', (req, res) => {
  res.render('project.pug', {
    pageTitle: '项目经验'
  });
});

app.get('/competition', (req, res) => {
  res.render('competition.pug', {
    pageTitle: '比赛交流'
  });
});


app.listen(3000, () => {
  console.log('Server is up on port 3000')
});
