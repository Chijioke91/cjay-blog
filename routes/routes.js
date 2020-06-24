const router = require('express').Router();
const {
  renderIndex,
  renderAbout,
  renderCreatePage,
} = require('../controller/controllers');

router.get('/', renderIndex);

router.get('/about', renderAbout);

router.get('/blogs/create', renderCreatePage);

module.exports = router;
