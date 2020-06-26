const router = require('express').Router();
const {
  renderIndex,
  renderAbout,
  renderCreatePage,
  renderBlogPage,
  addBlog,
  getSingleBlog,
  deleteBlog,
} = require('../controller/controllers');

router.get('/', renderIndex);

router.get('/about', renderAbout);

router.get('/blogs/create', renderCreatePage);

router.get('/blogs', renderBlogPage);

router.post('/blogs', addBlog);

router.get('/blogs/:id', getSingleBlog);

router.delete('/blogs/:id', deleteBlog);

module.exports = router;
