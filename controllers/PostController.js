import Post from '../models/post.js'


class PostController {
    async create(req, res) {
        try { 
            const {author, title, content, picture} = req.body
            const post = await Post.create({author, title, content, picture})
            res.json(post);
            } catch (error){
                res.status(500).json(error)
            }
    }
    async getAll(req, res) {
        try {
            const posts = await Post.find();
            return res.json(posts);
        } catch (error){
            res.status(500).json(error)
        }
    }
    async getOne(req, res) {
        try {
            const post = Post.findById(req.params.id);
            return res.json(post);
        } catch (error){
            res.status(500).json(error)
        }
    }
    async update(req, res) {
        try {
            const post = Post.findByIdAndUpdate(req.id);
            return res.json(post);
        } catch (error){
            res.status(500).json(error)
        }
    }
    async delete(req, res) {
        try {
            const post = Post.findByIdAndDelete(req.id);
            return res.json(post);
        } catch (error){
            res.status(500).json(error)
        }
    }
};

export default new PostController();