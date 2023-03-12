//homeRoutes, user see all blog post and can read them
//Dashboard, you can see only your posts and read, edit, delete them
//once you are logged in
//login you login

const router = require('express').Router();
const { User, Post, Comment } = require('../models');
const withAuth = require('../utils/auth');

router.get('/', async (req, res) => {
    try {
        // Get all posts and JOIN with user data
        const postData = await Post.findAll({
            include: [
                {
                    model: User,
                    attributes: ['name'],
                }
            ],
        });

        //res.status(200).json(postData);

        // Serialize data so the template can read it
        const posts = postData.map((post) => post.get({ plain: true }));

        // Pass serialized data and session flag into template

        res.render('homepage', {
            posts,
            logged_in: req.session.logged_in
        });
    } catch (err) {
        res.status(500).json(err);
    }
});

router.get('/post/:id', async (req, res) => {
    try {
        const postData = await Post.findByPk(req.params.id, {
            include: [
                {
                    model: User,
                    attributes: ['name'],
                },
                {
                    model: Comment,
                    include: {
                        model: User,
                        attributes: ['name'],
                    },
                },
            ],
        });
        //

        if (!postData) {
            return res.status(404).json({ message: 'Post not found' });
        }

        //res.status(200).json(postData);
        
        const post = postData.get({ plain: true });

        res.render('post', {
            ...post,
            logged_in: req.session.logged_in
        });
        
    } catch (err) {
        res.status(500).json(err);
    }
});



router.get('/login', (req, res) => {
    // If the user is already logged in, redirect the request to another route
    if (req.session.logged_in) {
        res.redirect('/dashboard');
        return;
    }

    res.render('login');
});

router.get('/signup', (req, res) => {

    res.render('signup');
});

module.exports = router;
