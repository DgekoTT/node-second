import express from 'express'
import mongoose from 'mongoose'
import router from './router/router.js';
import fileUpload from 'express-fileupload';

const PORT = 3000;

const app = express();

app.use(express.json());
app.use(express.static('static'));

app.use(fileUpload({}));

app.use('/api', router);

const db_url = 'mongodb+srv://Dgeko:frGGT14@cluster0.5rbuesr.mongodb.net/node-second?retryWrites=true&w=majority'



async function startApp() {
    try {
        await mongoose.connect(db_url)
        app.listen(PORT, () => console.log('server started on PORT ' + PORT));
    } catch (error) {
        console.log(error)
    }
}

startApp();
