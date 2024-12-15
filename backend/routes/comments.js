const express = require('express');
const Comment = require('../models/Comment');
const router = express.Router();

// Add Comment
router.post('/', async (req, res) => {
    try {
        const { post, author, content } = req.body;
        const comment = new Comment({ post, author, content });
        await comment.save();
        res.status(201).json(comment);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

module.exports = router;
