// const blogs = [
//   { title: 'The name of the wind', snippet: 'Lorem ipsum dolor sit.' },
//   { title: 'The last of us', snippet: 'Lorem ipsum dolor sit.' },
//   { title: 'Stay safe and reply', snippet: 'Lorem ipsum dolor sit.' },
// ];

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
    res.status(400).json({ error: e.message });
  }
};
