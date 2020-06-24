const blogs = [
  { title: 'The name of the wind', snippet: 'Lorem ipsum dolor sit.' },
  { title: 'The last of us', snippet: 'Lorem ipsum dolor sit.' },
  { title: 'Stay safe and reply', snippet: 'Lorem ipsum dolor sit.' },
];

exports.renderIndex = (req, res) => {
  res.render('index', { title: 'Blogs', blogs });
};

exports.renderAbout = (req, res) => {
  res.render('about', { title: 'About' });
};

exports.renderCreatePage = (req, res) => {
  res.render('create', { title: 'Create Blog' });
};
