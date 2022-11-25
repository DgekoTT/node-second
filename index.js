import express from 'express'
import mongoose from 'mongoose'
import Post from './models/post.js'

const PORT = 3000;

const app = express();

app.use(express.json());

const db_url = 'mongodb+srv://Dgeko:frGGT14@cluster0.5rbuesr.mongodb.net/node-second?retryWrites=true&w=majority'

app.post('/', async (req, res) => {
    try { 
    const {author, title, content, picture} = req.body
    const post = await Post.create({author, title, content, picture})
    res.json(post);
    } catch (error){
        res.status(500).json(error)
    }
});

async function startApp() {
    try {
        await mongoose.connect(db_url)
        app.listen(PORT, () => console.log('server started on PORT ' + PORT));
    } catch (error) {
        console.log(error)
    }
}

startApp();
