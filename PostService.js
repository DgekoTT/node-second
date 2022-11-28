import post from "./models/post.js";
import fileService from "./fileService.js";

class PostService{
    async create(newE, picture) {
        const  fileName = fileService.saveFile(picture);
        const createPost = await post.create({...newE, picture: fileName});
        return createPost;
        } 
    
    async getAll() {
            const postsAll = await post.find();
            return res.json(postsAll);
        
    }
    async getOne(id) {
        if (!id){
           throw new Error('no ID')
            }
            const postId = await post.findById(id);
            return postId;
        }
    
    async update(newP) {
            if (!newP._id) {
                throw new Error('no ID')
                 }
            const updatedPost = await post.findByIdAndUpdate(newP._id, newP, {new: true});
            return updatedPost;
        } 

    async delete(id) {
        if (!id){
            throw new Error('no ID')
            }
            const postD = await post.findByIdAndDelete(id);
            return postD;
        } 
    }

export default new PostService();