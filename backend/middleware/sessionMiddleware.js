const session = require('express-session');

const sessionMiddleware = session({
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: true,
  cookie: {
    secure: false,  
    maxAge: 1000 * 60 * 120  //2hours
  }
});

module.exports = sessionMiddleware;
