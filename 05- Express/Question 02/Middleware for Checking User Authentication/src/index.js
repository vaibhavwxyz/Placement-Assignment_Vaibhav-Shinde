const auth = require("express-session");

function isAuthenticated(req, res, next) {
  // Check if the user is authenticated
  if (req.session.user) {
    // The user is authenticated, so send the data of the post
    next();
  } else {
    // The user is not authenticated, so send a 401 Unauthorized response
    res.status(401).send("Unauthorized");
  }
}

// Use the middleware on the /post route
app.get("/post", isAuthenticated, (req, res) => {
  // Get the data of the post
  const post = db.getPost(req.params.id);

  // Send the data of the post to the client
  res.json(post);
});
