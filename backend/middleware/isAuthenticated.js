const isAuthenticated = (req, res, next) => {
    if (req.session.isAuthenticated) {
      return next();
    } else {
      return res.redirect('/admin');
    }
};

module.exports = isAuthenticated;