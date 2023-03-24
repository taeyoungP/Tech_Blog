const router = require('express').Router();
const { User, Post, Comment } = require('../models');
const withAuth = require('../utils/auth');

// Use withAuth middleware to prevent access to route
router.get('/', withAuth, async (req, res) => {
    try {
        // Find the logged in user based on the session ID
        console.log(req.session);
        const userData = await User.findByPk(req.session.user_id, {
            attributes: { exclude: ['password'] },
            include: [{ model: Post }],
        });

        //res.status(200).json(userData);
        
        if (!userData) {
            return res.status(404).json({ message: 'User not found' });
        }

        const user = userData.get({ plain: true });
        //console.log(user);

        res.render('dashboard', {
            ...user,
            logged_in: true
            //logged_in: req.session.logged_in
        });
    } catch (err) {
        res.status(500).json(err);
    }
});

router.get('/edit/:id', withAuth, async (req, res) => {
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
                        attributes: ['name']
                    }
                }
            ],
        });

        if (!postData) {
            return res.status(404).json({ message: 'Post not found' });
        }
        
        const post = postData.get({ plain: true });

        res.render('edit_post', {
            ...post,
            logged_in: req.session.logged_in
        });
        
    } catch (err) {
        res.status(500).json(err);
    }
});


router.get('/new', (req, res) => {
    res.render('new_post');
});

module.exports = router;