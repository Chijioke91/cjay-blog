const router = require('express').Router();
const {
  renderIndex,
  renderAbout,
  renderCreatePage,
  renderBlogPage,
} = require('../controller/controllers');

router.get('/', renderIndex);

router.get('/about', renderAbout);

router.get('/blogs/create', renderCreatePage);

router.get('/blogs', renderBlogPage);

module.exports = router;
