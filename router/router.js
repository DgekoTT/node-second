import  Router  from "express";
import Post from "../models/post.js";


const router = new Router();

router.post('/post', async (req, res) => {
    try { 
    const {author, title, content, picture} = req.body
    const post = await Post.create({author, title, content, picture})
    res.json(post)
    } catch (error){
        res.status(500).json(error)
    }
});
router.get('/posts');
router.get('/posts/:id');
router.put('/posts');
router.delete('/posts/:id');

export default router;