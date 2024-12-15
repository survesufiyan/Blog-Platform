const express = require('express');
const Blog = require('../models/Blog');
const router = express.Router();

// Get All Blogs
router.get('/', async (req, res) => {
    try {
        const blogs = await Blog.find().populate('author', 'username');
        res.status(200).json(blogs);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// Create Blog
router.post('/', async (req, res) => {
    try {
        const { title, content, author, status } = req.body;
        const blog = new Blog({ title, content, author, status });
        await blog.save();
        res.status(201).json(blog);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

module.exports = router;
