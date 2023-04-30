const router = require('express').Router();
const { Comment } = require('../../models');
const withAuth = require('../../utils/auth');

// Posts comment assuming user is authenticated and on the post page.
router.post('/', withAuth, async (req, rest)=>{
    try{
        const newComment = await Comment.create({
            ...req.body,
            post_id: req.body.post_id,
            user_id: req.session.user_id
        });
        res.status(200).json(newComment);

    }
    catch (err){
        console.log(err);
        rest.status(500).json(err);
    }
});



module.exports = router;