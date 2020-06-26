const Blog = require('../model/Blog');

exports.renderIndex = (req, res) => {
  res.redirect('/blogs');
};

exports.renderAbout = (req, res) => {
  res.render('about', { title: 'About' });
};

exports.renderCreatePage = (req, res) => {
  res.render('create', { title: 'Create Blog' });
};

exports.renderBlogPage = async (req, res) => {
  try {
    const blogs = await Blog.find();
    res.status(200).render('index', { title: 'Blogs', blogs });
  } catch (e) {
    console.log(e.message);
  }
};

exports.addBlog = async (req, res) => {
  try {
    await Blog.create(req.body);
    res.redirect('/blogs');
  } catch (e) {
    console.log(e.message);
  }
};

exports.getSingleBlog = async (req, res) => {
  try {
    const blog = await Blog.findById(req.params.id);

    res.render('details', { blog, title: 'Blog Details' });
  } catch (e) {
    console.log(e.message);
  }
};

exports.deleteBlog = async (req, res) => {
  try {
    await Blog.findByIdAndDelete(req.params.id);
    res.json({ redirectUrl: '/blogs' });
  } catch (e) {
    console.log(e.message);
  }
};
