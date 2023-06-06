import blogModel from "../models/blogModel.js";

// Add new blog
export const addBlog = async (req, res) => {
  try {
    const { title, content } = req.body;

    const newPost = new blogModel({
      title,
      content,
    });

    const savedPost = await newPost.save();

    res.json(savedPost);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Error adding blog" });
  }
};

// Get all blog
export const getAllBlog = async (req, res) => {
  try {
    const posts = await blogModel.find();

    res.json(posts);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Error getting blogs" });
  }
};

// Get specific blog
export const getBlog = async (req, res) => {
  try {
    const postId = req.params.id;

    const post = await blogModel.findById(postId);

    if (!post) {
      return res.status(404).json({ error: "Blog not found" });
    }

    res.json(post);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Error getting blog" });
  }
};

// Update blog
export const updateBlog = async (req, res) => {
  try {
    const postId = req.params.id;
    const { title, content } = req.body;

    const updatedPost = await blogModel.findByIdAndUpdate(
      postId,
      { title, content },
      { new: true }
    );

    if (!updatedPost) {
      return res.status(404).json({ error: "Blog not found" });
    }

    res.json(updatedPost);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Error updating blog" });
  }
};

// Delete blog
export const deleteBlog = async (req, res) => {
  try {
    const postId = req.params.id;

    const deletedPost = await blogModel.findByIdAndDelete(postId);

    if (!deletedPost) {
      return res.status(404).json({ error: "Blog not found" });
    }

    res.json({ message: "Blog deleted successfully" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Error deleting blog" });
  }
};
