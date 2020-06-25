require('dotenv').config();
const express = require('express');
const morgan = require('morgan');
const db = require('./config/connectDb');

db();

const routes = require('./routes/routes');

const app = express();

app.set('view engine', 'ejs');

app.use(express.static('public'));

if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

app.use('/', routes);

app.use((req, res) => {
  res.render('404', { title: '404' });
});

const port = process.env.PORT || 4000;

app.listen(port, () =>
  console.log(
    `Server is running in ${process.env.NODE_ENV} mode on port ${port}`
  )
);
