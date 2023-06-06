# Backend for Blog App

- **This is a backend for a blog app that allows users to perform CRUD operations on blogs.**

## Getting Started

- To get started, clone this repository and install the dependencies:

## CRUD Operations

**The app allows users to perform the following CRUD operations on blogs:**

- Create a blog: To create a blog, the user must send a POST request to the /blog endpoint. The request body must include the title and content of the blog.
- Delete a blog: To delete a blog, the user must send a DELETE request to the /blog/:id endpoint. The :id parameter is the ID of the blog to delete.
- Update a blog: To update a blog, the user must send a PUT request to the /blog/:id endpoint. The :id parameter is the ID of the blog to update. The request body must include the updated title and content of the blog.
- Replace a blog: To replace a blog, the user must send a PATCH request to the /blog/:id endpoint. The :id parameter is the ID of the blog to replace. The request body must include the new title and content of the blog.

## API

**The app exposes the following API endpoints:**

- `/blog:` Get a list of all blogs.
- `/blog/:id`: Get a blog by ID.
- `/blog:` Create a new blog.
- `/blog/:id`: Delete a blog by ID.
- `/blog/:id`: Update a blog by ID.
- `/blog/:id`: Replace a blog by ID.
