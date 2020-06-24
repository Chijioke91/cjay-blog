const express = require('express');

const routes = require('./routes/routes');

const app = express();

app.set('view engine', 'ejs');

app.use('/', routes);

app.use((req, res) => {
  res.render('404', { title: '404' });
});

const port = process.env.PORT || 4000;

app.listen(port, () => console.log(`Server is up on port ${port}`));
