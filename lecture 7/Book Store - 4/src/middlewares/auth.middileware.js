// middleware for authentication if not logged in you cant access any  pages 

export const auth = (req, res, next) => {
  if (req.session.userEmail) {
    next();
  } else {
    res.redirect("/login");
  }
};
