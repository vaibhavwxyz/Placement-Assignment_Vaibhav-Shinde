const express = require("express");
const app = express();

app.get("/posts", (req, res) => {
  // Create an array of 20 posts
  const posts = [];
  for (let i = 1; i <= 20; i++) {
    posts.push({ id: i, title: `Post ${i}` });
  }

  res.json(posts); // Send the posts as JSON response
});

// Start the server
const port = 3000; // You can change the port if needed
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
